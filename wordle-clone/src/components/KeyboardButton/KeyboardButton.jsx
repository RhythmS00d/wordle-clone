import { handleTyping } from "../../utils/handleTyping";

export const KeyboardButton = ({ value, ...props }) => {
  // const handleClick = (e) => {
  //   const currentValue = sessionStorage.getItem("currentValue");

  //   if (e.target.name === "BACKSPACE") {
  //     sessionStorage.setItem(
  //       "currentValue",
  //       currentValue.slice(0, currentValue.length - 1)
  //     );
  //   }

  //   if (e.target.name === "ENTER") {
  //     if(currentValue.length === 5) {
  //       //check the answer
  //     }
  //   }

  //   if (currentValue.length < 5) {
  //     sessionStorage.setItem(
  //       "currentValue",
  //       currentValue.concat(e.target.name)
  //     );
  //   }
  // };

  return (
    <button
      className="data-[key=Backspace]:w-[100px] data-[key=Backspace]:text-[12px] data-[key=Enter]:w-[60px] data-[key=Enter]:text-[12px]  text-white text-[1.25em] rounded-[4px] font-bold mb-[6px] w-[43px] h-[58px] bg-[#818384]"
      type="button"
      name={value}
      onClick={(e) => handleTyping(e.target.name.toUpperCase())}
      {...props}
    >
      {value}
    </button>
  );
};
