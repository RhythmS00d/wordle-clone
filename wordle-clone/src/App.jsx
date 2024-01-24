import { useEffect, useState } from "react";
import words from './data/allWords'

// components imports
import { WordleInput } from "./components/WordleInput";

function App() {
  const [word, setWord] = useState("");

  useEffect(() => {
    const random = Math.floor(Math.random() * words.length - 1)
    setWord(words[random])
  }, []);

  return (
    <main className="w-[60%] min-h-dvh my-0 mx-auto bg-gray-900">
      <section>
        <WordleInput />
      </section>
    </main>
  );
}

export default App;
