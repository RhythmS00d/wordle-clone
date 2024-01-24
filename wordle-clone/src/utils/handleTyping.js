export const handleTyping = (key, guesses, setGuesses, currentIndex) => {
  if (key === "BACKSPACE" || key === "DELETE") {
    setGuesses((prev) => ({
      ...prev,
      [currentIndex]: prev[currentIndex].slice(
        0,
        prev[currentIndex].length - 1
      ),
    }));
  } else if (guesses[currentIndex].length < 5) {
    setGuesses((prev) => ({
      ...prev,
      [currentIndex]: prev[currentIndex]+key
    }));
  }
};
