import { observer } from "mobx-react";
import { cn } from "../../utils/twMerge";

import store from "../../store/store";

export const WordleInput = observer(({ value, className, currentCol, currentRow, ...props }) => {
  const { guesses, currentRowIndex } = store;
  return (
    <div
      className={cn(
        "text-white data-wrong:bg-red-400 data-correct:bg-green-500 text-[1em] flex items-center justify-center font-sans font-medium border-2 border-[#3a3a3c] aspect-square w-[52px]",
        className
      )}
      {...props}
      data-active={currentRowIndex === currentRow}
    >
      {guesses[currentRow][currentCol]}
    </div>
  );
});
