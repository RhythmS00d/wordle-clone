import { makeAutoObservable } from "mobx";
import words from "../data/allWords";

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
  currentRowIndex = 1;
  answer = "";
  endGame = false;
  showAlert = false;
  alertText = "";

  constructor(answer) {
    makeAutoObservable(this);
    this.answer = answer;
  }

  increaseRowIndex() {
    this.currentRowIndex += 1;
  }

  useBackspace() {
    this.guesses[this.currentRowIndex] = this.guesses[
      this.currentRowIndex
    ].slice(0, this.guesses[this.currentRowIndex].length - 1);
  }

  updateGuesses(key) {
    this.guesses[this.currentRowIndex] += key;
  }

  updateEndGame() {
    this.endGame = !this.endGame;
  }

  updateShowAlert(text) {
    this.showAlert = !this.showAlert;
    this.alertText = text;
  }

  updateSubmitted(id) {
    this.submitted[id] = !this.submitted[id];
  }

  updateError(id) {
    this.error[id] = !this.error[id];
  }
}

const random = Math.floor(Math.random() * words.length);
console.log(words[random]);
const store = new Store(words[random]);

export default store;
