import { WordleInput } from "../wordleInput/wordleInput";
import { cn } from "../../utils/twMerge";

export const WordleInputGroup = ({
  multiplier,
  value,
  className,
  ...props
}) => {
  return (
    <div
      className={cn(`flex gap-[5px] data-error:animate-shake`, className)}
      data-type="row"
    >
      {Array(multiplier)
        .fill(0)
        .map((input, index) => (
          <WordleInput key={index} currentCol={index} {...props} />
        ))}
    </div>
  );
};
