import React, { Component } from "react";
import PropTypes from "prop-types";
import { connect } from "react-redux";

class Result extends Component {
  render() {
    let result = "";

    if (this.props.turn) {
      result = `It's ${this.props.turn.toUpperCase()}'s turn.`;
    }

    if (this.props.won) {
      result = `Congratulations! ${this.props.won.toUpperCase()} won!`;
    } else if (this.props.draw) {
      result = "Bingo!!! Draw game!";
    }

    return (
      <div>
        <p>{result}</p>
      </div>
    );
  }
}

Result.propTypes = {
  won: PropTypes.string,
  turn: PropTypes.string.isRequired,
  draw: PropTypes.bool.isRequired
};

function mapStateToProps({ tictactoe }) {
  return {
    turn: tictactoe.turn,
    won: tictactoe.won,
    draw: tictactoe.draw
  };
}
export default connect(mapStateToProps, null)(Result);
