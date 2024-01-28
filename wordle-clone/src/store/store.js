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
  currentRowIndex = 1;
  answer = "";
  endGame = false;

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
}

const random = Math.floor(Math.random() * words.length);
console.log(words[random]);
const store = new Store(words[random]);

export default store;
