export const WordleInput = () => {
  return (
    <input
      className="focus:shadow-orange-500/50 shadow-md text-white text-2xl text-center focus:outline-none bg-gray-600 rounded-sm w-10 aspect-square"
      type="text"
      required
      maxLength={1}
    />
  );
};
