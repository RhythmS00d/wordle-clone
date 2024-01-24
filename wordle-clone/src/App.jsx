import { useEffect, useState } from "react";
import words from "./data/allWords";

// components imports
import { WordleInputGroup } from "./components/WordleInputGroup";
import { Keyboard } from "./components/keyboard";

function App() {
  const [word, setWord] = useState("");

  useEffect(() => {
    const random = Math.floor(Math.random() * words.length - 1);
    setWord(words[random]);
  }, []);

  return (
    <main className="min-w-dvh min-h-dvh my-0 bg-[#121213]">
      <nav className="w-[100dvw] flex items-center justify-center flex-nowrap m-0 p-0 border-b-[1px] border-b-[#3a3a3c] h-[65px]">
        <h1 className="text-white text-4xl font-[nyt-karnakcondensed] font-[700] flex-grow-2">Wordle</h1>
      </nav>
      <section className="h-full flex flex-col flex-1 items-center justify-evenly">
        <section className="flex flex-col items-center gap-[5px] mt-6 mb-6">
          <WordleInputGroup multiplier={5} value="A" />
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
