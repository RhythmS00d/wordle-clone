import { useEffect, useState } from "react";
import words from './data/allWords'

// components imports
import { WordleInputGroup } from "./components/WordleInputGroup";

function App() {
  const [word, setWord] = useState("");

  useEffect(() => {
    const random = Math.floor(Math.random() * words.length - 1)
    setWord(words[random])
  }, []);

  return (
    <main className="min-w-dvh min-h-dvh my-0 mx-auto bg-[#121213]">
      <section className="flex flex-col items-center gap-[5px]">
        <WordleInputGroup multiplier={5} />
        <WordleInputGroup multiplier={5} />
        <WordleInputGroup multiplier={5} />
        <WordleInputGroup multiplier={5} />
        <WordleInputGroup multiplier={5} />
        <WordleInputGroup multiplier={5} />
      </section>
    </main>
  );
}

export default App;
