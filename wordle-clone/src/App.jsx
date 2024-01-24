import { useEffect, useState } from "react";
import services from "./utils/getRandomWord";

// components imports
import { wordleInput } from "./components/wordleInput";

function App() {
  const [word, setWord] = useState("");

  useEffect(() => {
    services.getRandomWord().then((word) => setWord(word));
  }, []);

  return <h1>{word}</h1>;
}

export default App;
