import { makeAutoObservable } from "mobx";
import words from "../data/allWords";

/**
 * @usage sets all states and their setters
 *
 * @constructor create a new instance of the store with a random word/answer
 *
 * @returns a store instance
 */

class Store {
  guesses = {
    1: "",
    2: "",
    3: "",
    4: "",
    5: "",
    6: "",
  };
  submitted = {
    1: false,
    2: false,
    3: false,
    4: false,
    5: false,
    6: false,
  };
  error = {
    1: false,
    2: false,
    3: false,
    4: false,
    5: false,
    6: false,
  };
  keys = {
    A: "",
    B: "",
    C: "",
    D: "",
    E: "",
    F: "",
    G: "",
    H: "",
    I: "",
    J: "",
    K: "",
    L: "",
    M: "",
    N: "",
    O: "",
    P: "",
    Q: "",
    R: "",
    S: "",
    T: "",
    U: "",
    V: "",
    W: "",
    X: "",
    Y: "",
    Z: "",
  };
  currentRowIndex = 1;
  answer = "";
  endGame = false;
  showAlert = false;
  alertText = "";

  // constructes a new instance of the store
  constructor(answer) {
    makeAutoObservable(this);
    this.answer = answer;
  }

  // increase the current row index
  increaseRowIndex() {
    this.currentRowIndex += 1;
  }

  // deletes the last letter from the typed guess
  useBackspace() {
    this.guesses[this.currentRowIndex] = this.guesses[
      this.currentRowIndex
    ].slice(0, this.guesses[this.currentRowIndex].length - 1);
  }

  // adds a new letter to the current guess
  updateGuesses(key) {
    this.guesses[this.currentRowIndex] += key;
  }

  // ends the game on either lose or win
  updateEndGame() {
    this.endGame = !this.endGame;
  }

  // shows a alert message
  updateShowAlert(text) {
    this.showAlert = !this.showAlert;
    this.alertText = text;
  }

  // detects if the current guess is entered
  updateSubmitted(id) {
    this.submitted[id] = !this.submitted[id];
  }

  // detects if the current guess is valid
  updateError(id) {
    this.error[id] = !this.error[id];
  }

  updateKeyColor(key, color) {
    this.keys[key] = color;
  }
}

const random = Math.floor(Math.random() * words.length);
const store = new Store(words[random].toUpperCase());

export default store;
