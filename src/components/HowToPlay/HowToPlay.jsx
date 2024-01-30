import { useEffect, useState } from "react";

export const HowToPlay = ({ reference }) => {
  const [showHelpMenu, setShowHelpMenu] = useState(true);

  useEffect(() => {
    if (reference.current && showHelpMenu === false) {
      reference.current.focus();
    }
  }, [showHelpMenu]);

  return showHelpMenu ? (
    <section className="w-full h-[100dvh] pt-20 absolute">
      <dialog className="w-full h-[calc(85%-30px)] bg-transparent flex items-center justify-center">
        <div className="bg-[#121213] border-[#1d1d1e] overflow-y-scroll relative border-[2px] p-8 h-full w-[90%] max-w-[520px] rounded-lg shadow-[0_4px_23px_0_rgba(0,0,0,.2)]">
          <div className="w-full text-white p-[16px] font-sans">
            <h2 className="text-3xl font-bold leading-7 pb-2">How To Play</h2>
            <button
              type="button"
              onClick={() => setShowHelpMenu(false)}
              className="w-[30px] h-[30px] bg-none p-0 border-none absolute top-[16px] right-[24px] cursor-pointer select-none overflow-visible text-[100%]"
            >
              <svg
                aria-hidden="true"
                xmlns="http://www.w3.org/2000/svg"
                height="30"
                viewBox="0 0 24 24"
                width="30"
                className="game-icon"
                data-testid="icon-close"
              >
                <path
                  fill="white"
                  d="M19 6.41L17.59 5 12 10.59 6.41 5 5 6.41 10.59 12 5 17.59 6.41 19 12 13.41 17.59 19 19 17.59 13.41 12z"
                ></path>
              </svg>
            </button>
            <h3 className="text-[20px] font-normal font-serif leading-6 m-0">
              Guess the Wordle in 6 tries.
            </h3>
            <section className="mt-6">
              <ul className="list-disc text-[16px]">
                <li>Each guess must be a valid 5-letter word.</li>
                <li>
                  The color of the tiles will change to show how close your
                  guess was to the word.
                </li>
              </ul>
              <div className="mt-12">
                <p>Examples</p>
                <div className="mt-[8px] mb-[20px]">
                  <div className="inline-flex w-[32px] h-[32px] mr-[4px] align-baseline">
                    <div className="bg-[#538d4e] text-[#f8f8f8] pt-[1px] text-[1.6rem] inline-flex items-center justify-center font-bold align-middle leading-[1] uppercase w-full">
                      W
                    </div>
                  </div>
                  <div className="inline-flex w-[32px] h-[32px] mr-[4px] align-baseline">
                    <div className="border-[2px] border-[#3a3a3c] text-[#f8f8f8] pt-[1px] text-[1.6rem] inline-flex items-center justify-center font-bold align-middle leading-[1] uppercase w-full">
                      E
                    </div>
                  </div>
                  <div className="inline-flex w-[32px] h-[32px] mr-[4px] align-baseline">
                    <div className="border-[2px] border-[#3a3a3c] text-[#f8f8f8] pt-[1px] text-[1.6rem] inline-flex items-center justify-center font-bold align-middle leading-[1] uppercase w-full">
                      A
                    </div>
                  </div>
                  <div className="inline-flex w-[32px] h-[32px] mr-[4px] align-baseline">
                    <div className="border-[2px] border-[#3a3a3c] text-[#f8f8f8] pt-[1px] text-[1.6rem] inline-flex items-center justify-center font-bold align-middle leading-[1] uppercase w-full">
                      R
                    </div>
                  </div>
                  <div className="inline-flex w-[32px] h-[32px] mr-[4px] align-baseline">
                    <div className="border-[2px] border-[#3a3a3c] text-[#f8f8f8] pt-[1px] text-[1.6rem] inline-flex items-center justify-center font-bold align-middle leading-[1] uppercase w-full">
                      Y
                    </div>
                  </div>
                  <p>
                    <strong>W</strong> is in the word and in the correct spot.
                  </p>
                </div>
                <div className="mt-[8px] mb-[20px]">
                  <div className="inline-flex w-[32px] h-[32px] mr-[4px] align-baseline">
                    <div className="border-[2px] border-[#3a3a3c] text-[#f8f8f8] pt-[1px] text-[1.6rem] inline-flex items-center justify-center font-bold align-middle leading-[1] uppercase w-full">
                      P
                    </div>
                  </div>
                  <div className="inline-flex w-[32px] h-[32px] mr-[4px] align-baseline">
                    <div className="bg-[#b59f3b] text-[#f8f8f8] pt-[1px] text-[1.6rem] inline-flex items-center justify-center font-bold align-middle leading-[1] uppercase w-full">
                      I
                    </div>
                  </div>
                  <div className="inline-flex w-[32px] h-[32px] mr-[4px] align-baseline">
                    <div className="border-[2px] border-[#3a3a3c] text-[#f8f8f8] pt-[1px] text-[1.6rem] inline-flex items-center justify-center font-bold align-middle leading-[1] uppercase w-full">
                      L
                    </div>
                  </div>
                  <div className="inline-flex w-[32px] h-[32px] mr-[4px] align-baseline">
                    <div className="border-[2px] border-[#3a3a3c] text-[#f8f8f8] pt-[1px] text-[1.6rem] inline-flex items-center justify-center font-bold align-middle leading-[1] uppercase w-full">
                      L
                    </div>
                  </div>
                  <div className="inline-flex w-[32px] h-[32px] mr-[4px] align-baseline">
                    <div className="border-[2px] border-[#3a3a3c] text-[#f8f8f8] pt-[1px] text-[1.6rem] inline-flex items-center justify-center font-bold align-middle leading-[1] uppercase w-full">
                      S
                    </div>
                  </div>
                  <p>
                    <strong>P</strong> is in the word but in the wrong spot.
                  </p>
                </div>
                <div className="mt-[8px] mb-[20px]">
                  <div className="inline-flex w-[32px] h-[32px] mr-[4px] align-baseline">
                    <div className="border-[2px] border-[#3a3a3c] text-[#f8f8f8] pt-[1px] text-[1.6rem] inline-flex items-center justify-center font-bold align-middle leading-[1] uppercase w-full">
                      V
                    </div>
                  </div>
                  <div className="inline-flex w-[32px] h-[32px] mr-[4px] align-baseline">
                    <div className="border-[2px] border-[#3a3a3c] text-[#f8f8f8] pt-[1px] text-[1.6rem] inline-flex items-center justify-center font-bold align-middle leading-[1] uppercase w-full">
                      A
                    </div>
                  </div>
                  <div className="inline-flex w-[32px] h-[32px] mr-[4px] align-baseline">
                    <div className="border-[2px] border-[#3a3a3c] text-[#f8f8f8] pt-[1px] text-[1.6rem] inline-flex items-center justify-center font-bold align-middle leading-[1] uppercase w-full">
                      G
                    </div>
                  </div>
                  <div className="inline-flex w-[32px] h-[32px] mr-[4px] align-baseline">
                    <div className="bg-[#3a3a3c] text-[#f8f8f8] pt-[1px] text-[1.6rem] inline-flex items-center justify-center font-bold align-middle leading-[1] uppercase w-full">
                      U
                    </div>
                  </div>
                  <div className="inline-flex w-[32px] h-[32px] mr-[4px] align-baseline">
                    <div className="border-[2px] border-[#3a3a3c] text-[#f8f8f8] pt-[1px] text-[1.6rem] inline-flex items-center justify-center font-bold align-middle leading-[1] uppercase w-full">
                      E
                    </div>
                  </div>
                  <p>
                    <strong>U</strong> is not in the word in any spot.
                  </p>
                </div>
              </div>
            </section>
          </div>
        </div>
      </dialog>
    </section>
  ) : (
    <></>
  );
};
