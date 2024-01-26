export const handleEndGame = (setEndGame) => {
  setEndGame((prev) => !prev);
  sessionStorage.setItem('gameWin', 'true')
};