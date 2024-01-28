import { handleEndGame } from "./handleEndGame";

import store from "../store/store";

export const handleAnswerLogic = (activeElements) => {
  const { answer } = store;
  let tempAnswer = answer.toUpperCase();
  activeElements.forEach((element, index) => {
    if (element.innerHTML === tempAnswer[index]) {
      element.setAttribute("data-correct", "true");
      tempAnswer =
        tempAnswer.slice(0, index) + " " + tempAnswer.slice(index + 1);
    } else if (tempAnswer.includes(element.innerHTML)) {
      element.setAttribute("data-wrong", "true");
    }
  });

  if (tempAnswer === "     ") {
    // game win
    return { win: true, endGameHandler: handleEndGame };
  }
};
