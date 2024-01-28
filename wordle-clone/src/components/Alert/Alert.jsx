import { cn } from "../../utils/twMerge";

import store from "../../store/store";
import { observer } from "mobx-react";

export const Alert = observer(() => {
  const { showAlert, alertText } = store;
  const open = "animate-alert flex opacity-100";
  return (
    <div
      className={cn(
        "w-44 h-14 bg-red-400 rounded-md absolute hidden opacity-0 origin-right right-10 top-10 items-center justify-center",
        showAlert ? open : ""
      )}
    >
      <h3 className="text-white font-sans text-sm">{alertText}</h3>
    </div>
  );
});
