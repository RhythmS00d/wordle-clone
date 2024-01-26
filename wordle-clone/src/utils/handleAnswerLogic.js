import { handleEndGame } from "./handleEndGame";

export const handleAnswerLogic = (
  answer,
  activeElements,
  setCurrentRowIndex
) => {
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

  setCurrentRowIndex((prev) => prev + 1);
};
