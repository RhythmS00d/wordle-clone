import {cn} from '../../utils/twMerge'

export const WordleInput = ({ value, className, ...props }) => {
  return (
    <div
      className={cn(
        "text-white data-wrong:bg-red-400 data-correct:bg-green-500 text-[1em] flex items-center justify-center font-sans font-medium border-2 border-[#3a3a3c] aspect-square w-[52px]"
      , className)}
      {...props}
    >
      {value}
    </div>
  );
};
