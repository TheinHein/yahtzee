import React, { Component } from "react";
import RuleRow from "./RuleRow";
import "./ScoreTable.css";
import {
  ones,
  twos,
  threes,
  fours,
  fives,
  sixes,
  threeOfKind,
  fourOfKind,
  fullHouse,
  smallStraight,
  largeStraight,
  yahtzee,
  chance,
} from "./Rules";

class ScoreTable extends Component {
  render() {
    const { scores, doScore, description } = this.props;

    return (
      <div className="ScoreTable">
        <section className="ScoreTable-section">
          <h2>Upper</h2>
          <table cellSpacing="0">
            <tbody>
              <RuleRow
                name="Ones"
                descript={description.ones}
                score={scores.ones}
                doScore={(evt) => doScore("ones", ones.evalRoll)}
                scoring={this.props.scoring.ones}
              />
              <RuleRow
                name="Twos"
                descript={description.twos}
                score={scores.twos}
                doScore={(evt) => doScore("twos", twos.evalRoll)}
                scoring={this.props.scoring.twos}
              />
              <RuleRow
                name="Threes"
                descript={description.threes}
                score={scores.threes}
                doScore={(evt) => doScore("threes", threes.evalRoll)}
                scoring={this.props.scoring.threes}
              />
              <RuleRow
                name="Fours"
                descript={description.fours}
                score={scores.fours}
                doScore={(evt) => doScore("fours", fours.evalRoll)}
                scoring={this.props.scoring.fours}
              />
              <RuleRow
                name="Fives"
                descript={description.fives}
                score={scores.fives}
                doScore={(evt) => doScore("fives", fives.evalRoll)}
                scoring={this.props.scoring.fives}
              />
              <RuleRow
                name="Sixes"
                descript={description.sixes}
                score={scores.sixes}
                doScore={(evt) => doScore("sixes", sixes.evalRoll)}
                scoring={this.props.scoring.sixes}
              />
            </tbody>
          </table>
        </section>
        <section className="ScoreTable-section ScoreTable-section-lower">
          <h2>Lower</h2>
          <table cellSpacing="0">
            <tbody>
              <RuleRow
                name="Three of Kind"
                descript={description.threeOfKind}
                score={scores.threeOfKind}
                doScore={(evt) => doScore("threeOfKind", threeOfKind.evalRoll)}
                scoring={this.props.scoring.threeOfKind}
              />
              <RuleRow
                name="Four of Kind"
                descript={description.fourOfKind}
                score={scores.fourOfKind}
                doScore={(evt) => doScore("fourOfKind", fourOfKind.evalRoll)}
                scoring={this.props.scoring.fourOfKind}
              />
              <RuleRow
                name="Full House"
                descript={description.fullHouse}
                score={scores.fullHouse}
                doScore={(evt) => doScore("fullHouse", fullHouse.evalRoll)}
                scoring={this.props.scoring.fullHouse}
              />
              <RuleRow
                name="Small Straight"
                descript={description.smallStraight}
                score={scores.smallStraight}
                doScore={(evt) =>
                  doScore("smallStraight", smallStraight.evalRoll)
                }
                scoring={this.props.scoring.smallStraight}
              />
              <RuleRow
                name="Large Straight"
                descript={description.largeStraight}
                score={scores.largeStraight}
                doScore={(evt) =>
                  doScore("largeStraight", largeStraight.evalRoll)
                }
                scoring={this.props.scoring.largeStraight}
              />
              <RuleRow
                name="Yahtzee"
                descript={description.yahtzee}
                score={scores.yahtzee}
                doScore={(evt) => doScore("yahtzee", yahtzee.evalRoll)}
                scoring={this.props.scoring.yahtzee}
              />
              <RuleRow
                name="Chance"
                descript={description.chance}
                score={scores.chance}
                doScore={(evt) => doScore("chance", chance.evalRoll)}
                scoring={this.props.scoring.chance}
              />
            </tbody>
          </table>
        </section>
      </div>
    );
  }
}

export default ScoreTable;
