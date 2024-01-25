export const handleGameWin = (setEndGame, eventFunction) => {
    setEndGame(prev => !prev)
    document.removeEventListener('keydown', eventFunction, true)
    window.removeEventListener("keydown", eventFunction, true);
}