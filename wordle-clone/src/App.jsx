import { useEffect, useRef } from "react";

// components imports
import { WordleInputGroup } from "./components/WordleInputGroup";
import { Keyboard } from "./components/keyboard";
import { GameEnd } from "./components/GameEnd/GameEnd";

// utils imports
import { handleKeyDown } from "./utils/handleKeydown";
import { cn } from "./utils/twMerge";

// import store
import store from "./store/store";

import { observer } from "mobx-react";

function App() {
  const mainRef = useRef(null);

  useEffect(() => {
    if (mainRef.current) {
      mainRef.current.focus();
    }
  }, []);

  function handleKeyDownEvent(e) {
    handleKeyDown(e);
  }

  const handleButtonClick = (e) => {
    if (e.target.tagName === "BUTTON") {
      handleKeyDownEvent(e);
    }
  };

  return (
    <main
      className="min-w-dvh min-h-dvh my-0 bg-[#121213]"
      tabIndex="0"
      onKeyDown={handleKeyDownEvent}
      ref={mainRef}
    >
      <GameEnd />
      <nav className="w-[100dvw] flex items-center justify-center flex-nowrap m-0 p-0 border-b-[1px] border-b-[#3a3a3c] h-[65px]">
        <h1 className="text-white text-4xl font-[nyt-karnakcondensed] font-[700] flex-grow-2">
          Wordle
        </h1>
      </nav>
      <section className="h-full flex flex-col flex-1 items-center justify-evenly">
        <section className="flex flex-col items-center gap-[5px] mt-6 mb-6">
          <WordleInputGroup multiplier={5} currentRow={1} />
          <WordleInputGroup multiplier={5} currentRow={2} />
          <WordleInputGroup multiplier={5} currentRow={3} />
          <WordleInputGroup multiplier={5} currentRow={4} />
          <WordleInputGroup multiplier={5} currentRow={5} />
          <WordleInputGroup multiplier={5} currentRow={6} />
        </section>
        <section className="max-w-[60%] mx-auto">
          <Keyboard onClick={handleButtonClick} />
        </section>
      </section>
    </main>
  );
}

export default App;
