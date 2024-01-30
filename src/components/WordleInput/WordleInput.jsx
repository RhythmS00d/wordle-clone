import { observer } from "mobx-react";
import { cn } from "../../utils/twMerge";

import store from "../../store/store";

/**
 * @param {className, currentCol, currentRow}
 * @function sets the data attribute of correct/wrong/active according to
 * the current guess and current row
 * @returns a div with the current entered guess
 */

export const WordleInput = observer(
  ({ className = "", currentCol = 0, currentRow = 0, ...props }) => {
    const { guesses, currentRowIndex, submitted, answer } = store;
    const correctLetter =
      guesses[currentRow][currentCol] === answer[currentCol].toUpperCase();
    return (
      <div
        className={cn(
          "text-white data-wrong:bg-[#b59f3b] data-correct:bg-green-500 text-[1em] flex items-center justify-center font-sans font-medium border-2 border-[#3a3a3c] aspect-square w-[52px]",
          className
        )}
        {...props}
        data-active={currentRowIndex === currentRow}
        data-correct={
          guesses[currentRow].length === 5 &&
          submitted[currentRow] &&
          correctLetter
        }
        data-wrong={
          guesses[currentRow].length === 5 &&
          submitted[currentRow] &&
          !correctLetter &&
          answer.toUpperCase().includes(guesses[currentRow][currentCol])
        }
      >
        {props.value ? props.value : guesses[currentRow][currentCol]}
      </div>
    );
  }
);
