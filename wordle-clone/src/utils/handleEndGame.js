export const handleEndGame = (setEndGame, eventFunction, win) => {
  setEndGame((prev) => !prev);
  document.removeEventListener("keydown", eventFunction, true);
  window.removeEventListener("keydown", eventFunction, true);
  sessionStorage.setItem('gameWin', 'true')
};