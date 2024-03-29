import { TbReload } from "react-icons/tb";
import { handleReset } from "../../utils/handleReset";

import { observer } from "mobx-react";

import store from "../../store/store";
import { cn } from "../../utils/twMerge";

/**
 * @returns a blurry div to indicate game end based on current row || endGame
 */

export const GameEnd = observer(() => {
  const { currentRowIndex, endGame, answer } = store;

  // sets endGameText according to gameWin
  const endGameText =
    sessionStorage.getItem("gameWin") === "true"
      ? "Congrats! You guessed it right" + ` - ${currentRowIndex} guesses`
      : "Guesses Finished! Game ended";
  return currentRowIndex > 6 || endGame ? (
    <div
      className={cn(
        "w-full h-full pointer-events-none opacity-95 absolute flex items-center justify-center flex-col gap-9",
        currentRowIndex > 6 || endGame ? "bg-[#121213]" : ""
      )}
    >
      <div className="w-[130px] h-[50px] bg-white flex items-center justify-center rounded-md">
        <h1 className="text-2xl font-bold uppercase tracking-widest">{answer}</h1>
      </div>
      <h1 className="text-white text-2xl">{endGameText}</h1>
      <button
        onClick={handleReset}
        className="text-white pointer-events-auto hover:bg-gray-800 w-20 aspect-square bg-black rounded-full flex items-center justify-center"
      >
        <TbReload className="size-8" />
      </button>
    </div>
  ) : (
    <></>
  );
});
