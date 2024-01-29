import { WordleInput } from "../wordleInput/wordleInput";
import { cn } from "../../utils/twMerge";

import store from "../../store/store";
import { observer } from "mobx-react";

export const WordleInputGroup = observer(
  ({ multiplier, value, className, ...props }) => {
    const { error } = store;
    return (
      <div
        className={cn(`flex gap-[5px] data-error:animate-shake`, className)}
        data-type="row"
        data-error={error[props.currentRow]}
      >
        {Array(multiplier)
          .fill(0)
          .map((input, index) => (
            <WordleInput key={index} currentCol={index} {...props} />
          ))}
      </div>
    );
  }
);
