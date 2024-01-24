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
    <main className="w-[60%] min-h-dvh my-0 mx-auto bg-gray-900">
      <section>
        <WordleInputGroup multiplier={5} />
      </section>
    </main>
  );
}

export default App;
