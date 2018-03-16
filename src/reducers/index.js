import { combineReducers } from "redux";
import TicTacToeReducer from "./ticTacToeReducer";

const rootReducer = combineReducers({
  tictactoe: TicTacToeReducer
});

export default rootReducer;
