const Square = ({ value, onSquareClick }) => {
  const textColor = value === "X" ? "text-red-300" : "text-blue-300";

  return (
    <button
      className={`w-20 h-20 border-2 border-gray-500 font-bold text-4xl
        ${textColor}
      `}
      onClick={onSquareClick}
    >
      {value}
    </button>
  );
};

export default Square;
