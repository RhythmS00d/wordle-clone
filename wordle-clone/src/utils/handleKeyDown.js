import words from "../data/allWords";

import store from "../store/store";
import { handleEndGame } from "./handleEndGame";

export const handleKeyDown = (e) => {
  const { guesses, currentRowIndex, endGame, answer } = store;

  if (currentRowIndex > 6 || endGame) return;

  const key = e.key ? e.key : e.target.name;

  if (key === "BACKSPACE" || key === "DELETE" || key === "Backspace") {
    store.useBackspace();
  } else if (key === "Enter" || key === "ENTER") {
    if (guesses[currentRowIndex].length < 5) {
      store.updateSubmitted(currentRowIndex);
      setTimeout(() => store.updateSubmitted(currentRowIndex), 500);

      store.updateShowAlert("5 letters required");
      setTimeout(() => {
        store.updateShowAlert("");
      }, 1500);
    } else {
      if (!words.includes(guesses[currentRowIndex].toLowerCase())) {
        store.updateShowAlert("Not a word");
        setTimeout(() => {
          store.updateShowAlert("");
        }, 1500);
        return;
      }

      const correctAnswer = guesses[currentRowIndex] === answer.toUpperCase();

      if (correctAnswer) {
        handleEndGame();
      } else if (!correctAnswer) {
        store.updateError(currentRowIndex);
        setTimeout(() => store.updateError(currentRowIndex), 500);
        sessionStorage.setItem("gameWin", "false");
        store.increaseRowIndex();
      }
      store.updateSubmitted(currentRowIndex);
    }
  } else if (
    guesses[currentRowIndex].length < 5 &&
    key.match(/^[a-zA-Z]{1}$/)
  ) {
    store.updateGuesses(key.toUpperCase());
  }
};
