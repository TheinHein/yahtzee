import React, { Component } from "react";
import Dice from "./Dice";
import ScoreTable from "./ScoreTable";
import "./Game.css";

const NUM_DICE = 5;
const NUM_ROLLS = 3;

class Game extends Component {
  static defaultProps = {
    description: {
      ones: "Get as many ones as possible.",
      twos: "Get as many twos as possible.",
      threes: "Get as many threes as possible.",
      fours: "Get as many fours as possible.",
      fives: "Get as many fives as possible.",
      sixes: "Get as many sixes as possible.",
      threeOfKind:
        "Get three dice with the same number. Points are the sum of all dice.",
      fourOfKind:
        "Get four dice with the same number. Points are the sum of all dice.",
      fullHouse:
        "Get three of a kind and a pair, e.g. 1,1,3,3,3 or 3,3,3,6,6. Scores 25 points.",
      smallStraight:
        "Get four sequential dice, 1,2,3,4 or 2,3,4,5 or 3,4,5,6. Scores 30 points.",
      largeStraight:
        "Get five sequential dice, 1,2,3,4,5 or 2,3,4,5,6. Scores 40 points.",
      yahtzee: "Five of a kind. Scores 50 points.",
      chance: "The score is simply the sum of the dice.",
    },
  };
  constructor(props) {
    super(props);
    this.state = {
      dice: Array.from({ length: NUM_DICE }),
      locked: Array(NUM_DICE).fill(false),
      rollsLeft: NUM_ROLLS,
      scores: {
        ones: undefined,
        twos: undefined,
        threes: undefined,
        fours: undefined,
        fives: undefined,
        sixes: undefined,
        threeOfKind: undefined,
        fourOfKind: undefined,
        fullHouse: undefined,
        smallStraight: undefined,
        largeStraight: undefined,
        yahtzee: undefined,
        chance: undefined,
      },
      scoring: {
        ones: false,
        twos: false,
        threes: false,
        fours: false,
        fives: false,
        sixes: false,
        threeOfKind: false,
        fourOfKind: false,
        fullHouse: false,
        smallStraight: false,
        largeStraight: false,
        yahtzee: false,
        chance: false,
      },
      isRolling: false,
    };
    this.roll = this.roll.bind(this);
    this.doScore = this.doScore.bind(this);
    this.toggleLocked = this.toggleLocked.bind(this);
  }

  roll(evt) {
    // roll dice whose indexes are in reroll
    this.setState((st) => ({
      dice: st.dice.map((d, i) =>
        st.locked[i] ? d : Math.ceil(Math.random() * 6)
      ),
      locked: st.rollsLeft > 1 ? st.locked : Array(NUM_DICE).fill(true),
      rollsLeft: st.rollsLeft - 1,
      isRolling: true,
    }));
    setTimeout(() => {
      this.setState({ isRolling: false });
    }, 1000);
  }

  toggleLocked(idx) {
    // toggle whether idx is in locked or not
    if (this.state.rollsLeft !== 0) {
      this.setState((st) => ({
        locked: [
          ...st.locked.slice(0, idx),
          !st.locked[idx],
          ...st.locked.slice(idx + 1),
        ],
      }));
    }
  }

  doScore(rulename, ruleFn) {
    // evaluate this ruleFn with the dice and score this rulename
    if (this.state.scores[rulename] === undefined && !this.state.isRolling) {
      this.setState((st) => ({
        scores: { ...st.scores, [rulename]: ruleFn(this.state.dice) },
        rollsLeft: NUM_ROLLS,
        locked: Array(NUM_DICE).fill(false),
        scoring: { ...st.scoring, [rulename]: true },
      }));
      this.roll();
    }
  }

  render() {
    return (
      <div className="Game">
        <header className="Game-header">
          <h1 className="App-title">Yahtzee!</h1>

          <section className="Game-dice-section">
            <Dice
              dice={this.state.dice}
              locked={this.state.locked}
              handleClick={this.toggleLocked}
              isRolling={this.state.isRolling}
            />
            <div className="Game-button-wrapper">
              <button
                className="Game-reroll"
                disabled={
                  this.state.locked.every((x) => x) || this.state.isRolling
                }
                onClick={this.roll}
              >
                {!this.state.isRolling
                  ? this.state.rollsLeft + " Rerolls Left"
                  : "Is Rolling..."}
              </button>
            </div>
          </section>
        </header>
        <ScoreTable
          doScore={this.doScore}
          scores={this.state.scores}
          description={this.props.description}
          scoring={this.state.scoring}
        />
      </div>
    );
  }
}

export default Game;
