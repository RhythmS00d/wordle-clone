import store from "../store/store";

/**
 * @function update the endGame state and ends the game
 */

export const handleEndGame = (() => {
  store.updateEndGame()
  sessionStorage.setItem("gameWin", "true");
});
