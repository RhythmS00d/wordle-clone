import { observer } from "mobx-react";
import { cn } from "../../utils/twMerge";

import store from "../../store/store";

export const WordleInput = observer(
  ({ value, className, currentCol, currentRow, ...props }) => {
    const { guesses, currentRowIndex, submitted, answer } = store;
    const correctLetter =
      guesses[currentRow][currentCol] === answer[currentCol].toUpperCase();
    return (
      <div
        className={cn(
          "text-white data-wrong:bg-red-400 data-correct:bg-green-500 text-[1em] flex items-center justify-center font-sans font-medium border-2 border-[#3a3a3c] aspect-square w-[52px]",
          className
        )}
        {...props}
        data-active={currentRowIndex === currentRow}
        data-correct={guesses[currentRow].length === 5 && submitted[currentRow] && correctLetter}
        data-wrong={
          guesses[currentRow].length === 5 &&
          submitted[currentRow] &&
          !correctLetter &&
          answer.toUpperCase().includes(guesses[currentRow][currentCol])
        }
      >
        {guesses[currentRow][currentCol]}
      </div>
    );
  }
);
