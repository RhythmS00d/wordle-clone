import keys from "../../data/keys";

import { KeyboardButton } from "../KeyboardButton/KeyboardButton";

export const Keyboard = () => {
  const className = "flex justify-center gap-[4px]";
  const keyStyle = "data-[key=Backspace]:w-fit";
  return (
    <>
      <div className={className}>
        {keys[0].map((key, index) => (
          <KeyboardButton
            value={key.toUpperCase()}
            key={index}
            data-key={key}
          />
        ))}
      </div>
      <div className={className}>
        {keys[1].map((key, index) => (
          <KeyboardButton
            value={key.toUpperCase()}
            key={10 + index}
            data-key={key}
          />
        ))}
      </div>
      <div className={className}>
        {keys[2].map((key, index) => (
          <KeyboardButton
            value={key.toUpperCase()}
            key={20 + index}
            data-key={key}
          />
        ))}
      </div>
    </>
  );
};
