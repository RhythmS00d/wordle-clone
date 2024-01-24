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

  return <WordleInput/>
}

export default App;
