import React, { Component } from "react";
import PropTypes from "prop-types";
import { connect } from "react-redux";

import {
  Symbol,
  BlankSymbol,
  XSymbol,
  OSymbol
} from "../components"

import { X, O } from "../models/constants";
import { addSymbol, resetGame } from "../actions";

class Board extends Component {
  addSymbol = (rowIndex, position, symbol) => {
    !this.props.won && this.props.addSymbol(rowIndex, position, symbol);
  };

  getSymbol = (rowIndex, position, symbol) => {
    if (symbol === X) {
      return <XSymbol key={position} position={position} />;
    }
    if (symbol === O) {
      return <OSymbol key={position} position={position} />;
    }
    return (
      <BlankSymbol
        key={position}
        addSymbol={this.addSymbol.bind(this, rowIndex, position)}
        turn={this.props.turn}
      />
    );
  };

  renderRow = rowIndex => {
    return (
      <div className={`row row${rowIndex}`} key={rowIndex}>
        {this.props.board[rowIndex].map((symbol, position) => {
          return this.getSymbol(rowIndex, position, symbol);
        })}
      </div>
    );
  };

  renderResetGame = () => {
    return (
      <button className="reset-button" onClick={this.props.resetGame}>Reset Game</button>
    )
  }

  render() {
    const wonClass = this.props.won ? ` won-${this.props.wonLine}` : "";
    const drawClass = this.props.draw ? " draw" : "";
    const boardClass = "board" + wonClass + drawClass;

    return (
      <div className={boardClass}>
        {Object.keys(this.props.board).map(this.renderRow)}
        <div className="button-row">
          {this.renderResetGame()}
        </div>
      </div>
    );
  }
}

Board.propTypes = {
  board: PropTypes.object.isRequired,
  turn: PropTypes.string.isRequired,
  won: PropTypes.string,
  draw: PropTypes.bool.isRequired,
  wonLine: PropTypes.string,
  addSymbol: PropTypes.func.isRequired,
  resetGame: PropTypes.func.isRequired
};

function mapStateToProps({ tictactoe }) {
  return {
    board: tictactoe.board,
    turn: tictactoe.turn,
    won: tictactoe.won,
    draw: tictactoe.draw,
    wonLine: tictactoe.wonLine
  };
}

const mapDispatchToProps = (dispatch, ownProps) => {
  return {
    addSymbol: (rowIndex, position, symbol) => {
      dispatch(addSymbol(rowIndex, position, symbol));
    },
    resetGame: () => {
      dispatch(resetGame());
    }
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Board);
