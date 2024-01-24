export const handleTyping = (key) => {
  const currentValue = sessionStorage.getItem("currentValue");

  if (key === "BACKSPACE" || key === "DELETE") {
    sessionStorage.setItem(
      "currentValue",
      currentValue.slice(0, currentValue.length - 1)
    );
  } else if (currentValue.length < 5) {
    sessionStorage.setItem("currentValue", currentValue.concat(key));
  }
};
