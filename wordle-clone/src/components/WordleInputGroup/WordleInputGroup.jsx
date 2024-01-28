import { WordleInput } from "../wordleInput/wordleInput";
import { cn } from "../../utils/twMerge";

import store from "../../store/store";
import { useState } from "react";
import { observer } from "mobx-react";

export const WordleInputGroup = observer(
  ({ multiplier, value, className, currentRow, ...props }) => {
    return (
      <div
        className={cn(`flex gap-[5px] data-error:animate-shake`, className)}
        data-type="row"
      >
        {Array(multiplier)
          .fill(0)
          .map((input, index) => (
            <WordleInput
              key={index}
              {...props}
              value={value[index]}
            />
          ))}
      </div>
    );
  }
);
