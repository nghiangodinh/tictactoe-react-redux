export const ADD_SYMBOL = "ADD_SYMBOL";
export const RESET_GAME = "RESET_GAME";

export const addSymbol = (row, position, symbol) => ({
  type: ADD_SYMBOL,
  payload: {
    symbol,
    row,
    position
  }
});

export const resetGame = () => ({
  type: RESET_GAME
});
