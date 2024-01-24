import { useEffect, useState } from "react";
import services from "./utils/getRandomWord";

// components imports
import { WordleInput } from "./components/WordleInput";

function App() {
  const [word, setWord] = useState("");

  useEffect(() => {
    services.getRandomWord().then((word) => setWord(word));
  }, []);

  return <WordleInput />;
}

export default App;
