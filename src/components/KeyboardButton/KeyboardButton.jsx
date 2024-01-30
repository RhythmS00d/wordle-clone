import { cn } from "../../utils/twMerge";

import store from "../../store/store";
import { observer } from "mobx-react";
/**
 *
 * @param {value}
 * @returns a button with the specified key value
 */

export const KeyboardButton = observer(({ value, ...props }) => {
  const { keys } = store;

  return (
    <button
      className={cn(
        "flex max-sm:flex-[1_0_2rem] items-center justify-center data-[key=Backspace]:w-[200px] data-[key=Backspace]:text-[12px] data-[key=Enter]:w-[60px] data-[key=Enter]:text-[12px]  text-white text-[1.25em] rounded-[4px] font-bold mb-[6px] w-[43px] h-[58px] bg-[#818384]",
        keys[value]
      )}
      type="button"
      name={value}
      {...props}
    >
      {value}
    </button>
  );
});
