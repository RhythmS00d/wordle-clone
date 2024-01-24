import { WordleInput } from "../wordleInput/wordleInput";

export const WordleInputGroup = ({ multiplier, className }) => {
  return (
    <div className="">
      {Array(multiplier)
        .fill(<WordleInput />)
        .map((input) => input)}
    </div>
  );
};
