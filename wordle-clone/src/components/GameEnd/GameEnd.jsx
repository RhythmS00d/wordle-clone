import { TbReload } from "react-icons/tb";
import { handleReset } from "../../utils/handleReset";

export const GameEnd = ({ currentRow }) => {
  const endGameText =
    sessionStorage.getItem("gameWin") === "true"
      ? "Congrats! You guessed it right" + ` - ${currentRow} guesses`
      : "Guesses Finished! Game ended";
  return (
    <>
      <h1 className="text-white text-2xl">{endGameText}</h1>
      <button
        onClick={handleReset}
        className="text-white hover:bg-gray-800 w-20 aspect-square bg-black rounded-full flex items-center justify-center"
      >
        <TbReload className="size-8" />
      </button>
    </>
  );
};
