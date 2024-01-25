import { handleTyping } from "./handleTyping";
import { handleAnswerLogic } from "./handleAnswerLogic";

export function handleKeyDown(
  e,
  guesses,
  setGuesses,
  currentRowIndex,
  setEndGame,
  answer,
  setCurrentRowIndex
) {
  const key = e.key ? e.key : e.target.name;
  if (
    key.match(/^[a-zA-Z]{1}$/) ||
    key === "Backspace" ||
    key === "BACKSPACE"
  ) {
    handleTyping(key.toUpperCase(), guesses, setGuesses, currentRowIndex);
  }

  if (key === "Enter" || key === "ENTER") {
    const activeInputs = document.querySelectorAll('[data-active="true"]');
    if (guesses[currentRowIndex].length < 5) {
      // error animation
      activeInputs[0].parentElement.setAttribute("data-error", "true");
      setTimeout(
        () => activeInputs[0].parentElement.removeAttribute("data-error"),
        500
      );
    } else {
      const correctAnswer = handleAnswerLogic(
        answer,
        activeInputs,
        setCurrentRowIndex
      );

      if (correctAnswer?.win) {
        correctAnswer?.endGameHandler(setEndGame, handleKeyDown, true);
      } else if (!correctAnswer) {
        activeInputs[0].parentElement.setAttribute("data-error", "true");
        setTimeout(
          () => activeInputs[0].parentElement.removeAttribute("data-error"),
          500
        );
        sessionStorage.setItem("gameWin", "false");
      }
    }
  }
}
