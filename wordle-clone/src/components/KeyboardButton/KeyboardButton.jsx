import { handleTyping } from "../../utils/handleTyping";

export const KeyboardButton = ({ value, ...props }) => {
  return (
    <button
      className="data-[key=Backspace]:w-[100px] data-[key=Backspace]:text-[12px] data-[key=Enter]:w-[60px] data-[key=Enter]:text-[12px]  text-white text-[1.25em] rounded-[4px] font-bold mb-[6px] w-[43px] h-[58px] bg-[#818384]"
      type="button"
      name={value}
      {...props}
    >
      {value}
    </button>
  );
};
