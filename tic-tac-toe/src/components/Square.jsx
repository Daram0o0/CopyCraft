const Square = ({ value, onSquareClick }) => {
  return (
    <button
      className="w-20 h-20 border-2 border-gray-500 font-bold text-4xl"
      onClick={onSquareClick}
    >
      {value}
    </button>
  );
};

export default Square;
