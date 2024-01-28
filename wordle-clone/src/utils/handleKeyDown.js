import { handleAnswerLogic } from "./handleAnswerLogic";

import store from "../store/store";

export const handleKeyDown = (e) => {
  const { guesses, currentRowIndex, endGame } = store;
  
  if (currentRowIndex > 6 || endGame) return;

  const key = e.key ? e.key : e.target.name;
  const activeInputs = document.querySelectorAll('[data-active="true"]');

  if (key === "BACKSPACE" || key === "DELETE" || key === "Backspace") {
    store.useBackspace();
  } else if (key === "Enter" || key === "ENTER") {
    if (guesses[currentRowIndex].length < 5) {
      activeInputs[0].parentElement.setAttribute("data-error", "true");
      setTimeout(
        () => activeInputs[0].parentElement.removeAttribute("data-error"),
        500
      );
    } else {
      const correctAnswer = handleAnswerLogic(activeInputs);

      if (correctAnswer?.win) {
        correctAnswer?.endGameHandler();
      } else if (!correctAnswer) {
        activeInputs[0].parentElement.setAttribute("data-error", "true");
        setTimeout(
          () => activeInputs[0].parentElement.removeAttribute("data-error"),
          500
        );
        sessionStorage.setItem("gameWin", "false");
        store.increaseRowIndex();
      }
    }
  } else if (
    guesses[currentRowIndex].length < 5 &&
    key.match(/^[a-zA-Z]{1}$/)
  ) {
    store.updateGuesses(key.toUpperCase());
  }
};
