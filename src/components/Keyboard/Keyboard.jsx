import keys from "../../data/keys";

import { KeyboardButton } from "../KeyboardButton/KeyboardButton";

/**
 *
 * @returns set of buttons styled in form of keyboard
 */

export const Keyboard = ({ ...props }) => {
  const className = "flex justify-center gap-[4px]";
  const width = window.innerWidth

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
        {width <= 640
          ? keys[2].map((key, index) => {
              if (index > 0 && index < keys[2].length - 1) {
                return (
                  <KeyboardButton
                    value={key.toUpperCase()}
                    key={20 + index}
                    data-key={key}
                    {...props}
                  />
                );
              }
            })
          : keys[2].map((key, index) => (
              <KeyboardButton
                value={key.toUpperCase()}
                key={20 + index}
                data-key={key}
                {...props}
              />
            ))}
      </div>
      {width <= 640 && (
        <div className="flex items-center gap-3">
          <KeyboardButton
            value={"Enter".toUpperCase()}
            key={20 + 0}
            data-key="Enter"
            {...props}
          />
          <KeyboardButton
            value={"Backspace".toUpperCase()}
            key={20 + 8}
            data-key={"Backspace"}
            {...props}
          />
        </div>
      )}
    </>
  );
};
