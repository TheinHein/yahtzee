import React, { Component } from "react";
import "./RuleRow.css";

class RuleRow extends Component {
  render() {
    let style = this.props.scoring ? "RuleRow-disabled" : "RuleRow-active";
    let ruleRow;
    if (this.props.score === undefined) {
      ruleRow = <td className="RuleRow-descript">{this.props.descript}</td>;
    } else {
      ruleRow = <td className="RuleRow-score">{this.props.score}</td>;
    }

    return (
      <tr className={`RuleRow ${style} `} onClick={this.props.doScore}>
        <td className="RuleRow-name">{this.props.name}</td>
        {ruleRow}
      </tr>
    );
  }
}

export default RuleRow;
