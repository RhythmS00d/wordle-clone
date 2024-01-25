import { useEffect, useRef, useState } from "react";
import words from "./data/allWords";

// components imports
import { WordleInputGroup } from "./components/WordleInputGroup";
import { Keyboard } from "./components/keyboard";

// utils imports
import { handleTyping } from "./utils/handleTyping";
import { handleAnswerLogic } from "./utils/handleAnswerLogic";
import { cn } from "./utils/twMerge";

function App() {
  const [guesses, setGuesses] = useState({
    1: "",
    2: "",
    3: "",
    4: "",
    5: "",
    6: "",
  });
  const [currentRowIndex, setCurrentRowIndex] = useState(1);
  const [answer, setAnswer] = useState("");
  const [endGame, setEndGame] = useState(false)

  useEffect(() => {
    const random = Math.floor(Math.random() * words.length - 1);
    setAnswer(words[random]);
    console.log(words[random]);
  }, []);

  useEffect(() => {
    const handleButtonClick = (e) => {
      if (e.target.tagName === "BUTTON") {
        handleKeyDown(e);
      }
    };

    document.addEventListener("keydown", handleKeyDown, true);
    document.addEventListener("click", handleButtonClick, true);

    if (currentRowIndex >= 6) {
      // reset game option
      // end game
    }

    return () => {
      document.removeEventListener("keydown", handleKeyDown, true);
      document.removeEventListener("click", handleButtonClick, true);
      window.removeEventListener("keydown", handleKeyDown, true);
      window.removeEventListener("click", handleButtonClick, true);
    };
  }, [guesses, currentRowIndex]);

  function handleKeyDown(e) {
    const key = e.key ? e.key : e.target.name;
    if (
      key.match(/^[a-zA-Z]{1}$/) ||
      key === "Backspace" ||
      key === "BACKSPACE"
    ) {
      handleTyping(key.toUpperCase(), guesses, setGuesses, currentRowIndex);
    }

    if (key === "Enter" || key === "ENTER") {
      if (guesses[currentRowIndex].length < 5) {
        // error animation
      }
      const activeInputs = document.querySelectorAll('[data-active="true"]');
      const correctAnswer = handleAnswerLogic(
        answer,
        activeInputs,
        setCurrentRowIndex
      );

      if (correctAnswer?.win) correctAnswer?.endGame(setEndGame, handleKeyDown);
    }
  }

  return (
    <main className="min-w-dvh min-h-dvh my-0 bg-[#121213]">
      <div className={cn("w-full h-full opacity-85 absolute", endGame ? "bg-[#121213]" : "")}></div>
      <nav className="w-[100dvw] flex items-center justify-center flex-nowrap m-0 p-0 border-b-[1px] border-b-[#3a3a3c] h-[65px]">
        <h1 className="text-white text-4xl font-[nyt-karnakcondensed] font-[700] flex-grow-2">
          Wordle
        </h1>
      </nav>
      <section className="h-full flex flex-col flex-1 items-center justify-evenly">
        <section className="flex flex-col items-center gap-[5px] mt-6 mb-6">
          <WordleInputGroup
            multiplier={5}
            value={guesses[1]}
            data-active={currentRowIndex === 1 ? true : false}
          />
          <WordleInputGroup
            multiplier={5}
            value={guesses[2]}
            data-active={currentRowIndex === 2 ? true : false}
          />
          <WordleInputGroup
            multiplier={5}
            value={guesses[3]}
            data-active={currentRowIndex === 3 ? true : false}
          />
          <WordleInputGroup
            multiplier={5}
            value={guesses[4]}
            data-active={currentRowIndex === 4 ? true : false}
          />
          <WordleInputGroup
            multiplier={5}
            value={guesses[5]}
            data-active={currentRowIndex === 5 ? true : false}
          />
          <WordleInputGroup
            multiplier={5}
            value={guesses[6]}
            data-active={currentRowIndex === 6 ? true : false}
          />
        </section>
        <section className="max-w-[60%] mx-auto">
          <Keyboard />
        </section>
      </section>
    </main>
  );
}

export default App;
