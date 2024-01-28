import store from "../store/store";

export const handleEndGame = (() => {
  store.updateEndGame()
  sessionStorage.setItem("gameWin", "true");
});
