import { WordleInput } from "../wordleInput/wordleInput";
import { cn } from "../../utils/twMerge";

export const WordleInputGroup = ({ multiplier, className, ...props }) => {
  return (
    <div className={cn("flex gap-[5px]", className)}>
      {Array(multiplier)
        .fill(0)
        .map((input, index) => (
          <WordleInput key={index} {...props} />
        ))}
    </div>
  );
};
