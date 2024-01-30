import words from "../data/allWords";

import store from "../store/store";
import { handleEndGame } from "./handleEndGame";

/**
 *
 * @param e
 * @function handle key presses of "Backspace", "Enter", "Delete" and all keys in [a-z]
 */

export const handleKeyDown = (e) => {
  const { guesses, currentRowIndex, endGame, answer } = store;

  // stops the key listener when guesses finishes
  if (currentRowIndex > 6 || endGame) return;

  const key = e.key ? e.key : e.target.name;

  // handles "Backspace"
  if (key === "BACKSPACE" || key === "DELETE" || key === "Backspace") {
    store.useBackspace();
  } else if (key === "Enter" || key === "ENTER") {
    // handles "Enter"
    /**
     * checks if length === 5 is fulfilled
     */
    if (guesses[currentRowIndex].length < 5) {
      // update guess from valid --> invalid --> valid after 500 ms
      store.updateError(currentRowIndex);
      setTimeout(() => store.updateError(currentRowIndex), 500);

      // show alert with the given text
      store.updateShowAlert("5 letters required");
      setTimeout(() => {
        store.updateShowAlert("");
      }, 1500);
    } else {
      /**
       * handles all cases where guess is length === 5
       */
      if (!words.includes(guesses[currentRowIndex].toLowerCase())) {
        // word is not in dict
        // show alert with the given text
        store.updateShowAlert("Not a word");
        setTimeout(() => {
          store.updateShowAlert("");
        }, 1500);
        return;
      }

      // checks if the guess is correct
      // word exists in dict
      const correctAnswer = guesses[currentRowIndex] === answer.toUpperCase();

      if (correctAnswer) {
        // end game/game win
        handleEndGame();
      } else if (!correctAnswer) {
        // guess is wrong
        // update guess from valid --> invalid --> valid after 500 ms
        store.updateError(currentRowIndex);
        setTimeout(() => store.updateError(currentRowIndex), 500);

        // add a new item to sessionStorage
        sessionStorage.setItem("gameWin", "false");

        // increase the current row
        store.increaseRowIndex();
      }

      // updates the submit state of current guess
      store.updateSubmitted(currentRowIndex);

      // updates the keyboard button colors
      for (let i = 0; i < guesses[currentRowIndex].length; i++) {
        if (answer[i] === guesses[currentRowIndex][i])
          store.updateKeyColor(guesses[currentRowIndex][i], "bg-[#538d4e]");
        else if (answer.includes(guesses[currentRowIndex][i]))
          store.updateKeyColor(guesses[currentRowIndex][i], "bg-[#b59f3b]");
        else store.updateKeyColor(guesses[currentRowIndex][i], "bg-[#3a3a3c]");
      }
    }
  } else if (
    // checks if current is length !== 5 and not submitted
    guesses[currentRowIndex].length < 5 &&
    key.match(/^[a-zA-Z]{1}$/)
  ) {
    // update the current guess
    store.updateGuesses(key.toUpperCase());
  }
};
