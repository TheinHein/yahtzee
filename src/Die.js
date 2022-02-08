import React, { Component } from "react";
import "./Die.css";

class Die extends Component {
  constructor(props) {
    super(props);
    this.flip = this.flip.bind(this);
  }
  flip(evt) {
    if (!this.props.isRolling) {
      this.props.handleClick(this.props.idx);
    }
  }
  render() {
    const valByWord = ["zero", "one", "two", "three", "four", "five", "six"];
    const isLocked = this.props.locked ? "Die " : "Die-lock ";
    const isRolling =
      this.props.isRolling && !this.props.locked
        ? "Die-rolling Die[disabled]"
        : "";
    return (
      <i
        className={`${isLocked} ${isRolling}  fas fa-dice-${
          valByWord[this.props.val]
        } fa-5x`}
        onClick={this.flip}
      ></i>
    );
  }
}

export default Die;
