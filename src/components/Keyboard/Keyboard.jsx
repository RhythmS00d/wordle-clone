import keys from "../../data/keys";

import { KeyboardButton } from "../KeyboardButton/KeyboardButton";

/**
 *
 * @returns set of buttons styled in form of keyboard
 */

export const Keyboard = ({ ...props }) => {
  const className = "flex justify-center gap-[4px]";

  return (
    <>
      <div className={className}>
        {keys[0].map((key, index) => (
          <KeyboardButton
            value={key.toUpperCase()}
            key={index}
            data-key={key}
            {...props}
          />
        ))}
      </div>
      <div className={className}>
        {keys[1].map((key, index) => (
          <KeyboardButton
            value={key.toUpperCase()}
            key={10 + index}
            data-key={key}
            {...props}
          />
        ))}
      </div>
      <div className={className}>
        {keys[2].map((key, index) => (
          <KeyboardButton
            value={key.toUpperCase()}
            key={20 + index}
            data-key={key}
            {...props}
          />
        ))}
      </div>
    </>
  );
};
