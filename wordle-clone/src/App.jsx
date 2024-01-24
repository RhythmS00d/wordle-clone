import { useEffect, useState } from "react";
import words from "./data/allWords";

// components imports
import { WordleInputGroup } from "./components/WordleInputGroup";
import { Keyboard } from "./components/keyboard";

// utils imports
import { handleTyping } from "./utils/handleTyping";

function App() {
  useEffect(() => {
    const handleKeyDown = (e) => {
      if (e.key.match(/^[a-zA-Z]{1}$/) || e.key === "Backspace") {
        handleTyping(e.key.toUpperCase());
      }
    };

    document.addEventListener("keydown", handleKeyDown, true);

    const random = Math.floor(Math.random() * words.length - 1);
    sessionStorage.setItem("currentValue", "");
    sessionStorage.setItem("answer", words[random]);

    return () => {
      document.removeEventListener("keydown", handleKeyDown, true);
    };
  }, []);

  return (
    <main className="min-w-dvh min-h-dvh my-0 bg-[#121213]">
      <nav className="w-[100dvw] flex items-center justify-center flex-nowrap m-0 p-0 border-b-[1px] border-b-[#3a3a3c] h-[65px]">
        <h1 className="text-white text-4xl font-[nyt-karnakcondensed] font-[700] flex-grow-2">
          Wordle
        </h1>
      </nav>
      <section className="h-full flex flex-col flex-1 items-center justify-evenly">
        <section className="flex flex-col items-center gap-[5px] mt-6 mb-6">
          <WordleInputGroup multiplier={5} value={"abcde".toUpperCase()} />
          <WordleInputGroup multiplier={5} value="A" />
          <WordleInputGroup multiplier={5} value="A" />
          <WordleInputGroup multiplier={5} value="A" />
          <WordleInputGroup multiplier={5} value="A" />
          <WordleInputGroup multiplier={5} value="A" />
        </section>
        <section className="max-w-[60%] mx-auto">
          <Keyboard />
        </section>
      </section>
    </main>
  );
}

export default App;
