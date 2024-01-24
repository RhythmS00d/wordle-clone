import {cn} from '../../utils/twMerge'

export const WordleInput = ({ value, className, ...props }) => {
  return (
    <div
      className={cn(
        "text-white text-[1em] flex items-center justify-center font-sans font-medium border-2 border-[#3a3a3c] aspect-square w-[52px]"
      , className)}
      {...props}
    >
      {value}
    </div>
  );
};
