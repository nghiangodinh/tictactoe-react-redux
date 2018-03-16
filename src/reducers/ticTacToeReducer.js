import * as _ from "lodash";

import * as actions from "../actions";
import { X, O } from "../models/constants";
import { getSymbolResult } from "../services/ticTacToeService";


const initialState = {
  board: {
    0: ["", "", ""],
    1: ["", "", ""],
    2: ["", "", ""]
  },
  won: undefined, 
  wonLine: undefined, 
  draw: false, 
  turn: O
};

export default function (state = initialState, action) {
  switch (action.type) {
    case actions.ADD_SYMBOL:
      const { symbol, row, position } = action.payload;
      const newState = _.cloneDeep(state);
      newState.board[row][position] = symbol;

      const xResult = getSymbolResult(X, newState.board);
      const oResult = getSymbolResult(O, newState.board);

      setWinState(newState, xResult, X);
      setWinState(newState, oResult, O);
      switchTurn(newState);
      setDrawState(newState);

      return newState;

    case actions.RESET_GAME:
      return initialState;

    default:
      return state;
  }
};

const switchTurn = state => {
  if (!state.won) {
    state.turn = state.turn === O ? X : O;
  }
};

const isBoardFull = state => {
  return (
    [...state.board[0], ...state.board[1], ...state.board[2]].filter(
      symbol => symbol !== ""
    ).length === 9
  );
};

const setWinState = (state, result, symbol) => {
  if (result.won) {
    state.won = symbol;
    state.wonLine = result.line;
  }
};

const setDrawState = (state) => {
  if (isBoardFull(state) && !state.won) {
    state.draw = true;
  }
}
