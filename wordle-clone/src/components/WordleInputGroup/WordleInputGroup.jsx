import { WordleInput } from "../wordleInput/wordleInput";
import {cn} from '../../utils/twMerge'

export const WordleInputGroup = ({ multiplier, className }) => {
  return (
    <div className={cn("flex gap-2", className)}>
      {Array(multiplier)
        .fill(<WordleInput />)
        .map((input) => input)}
    </div>
  );
};
