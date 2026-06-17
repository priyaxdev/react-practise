interface prop {
  handleClick: (category: string) => void;
}

const Buttons = ({handleClick}:prop) => {
  return (
    <>
      <button
        className="text-text rounded-full m-1 hover:cursor-pointer ml-3 px-4 py-1 hover:bg-surface border-2 border-border"
        onClick={() => handleClick("All")}
      >
        All
      </button>
      <button
        className="text-text rounded-full m-1 hover:cursor-pointer px-4 py-1 hover:bg-surface border-2 border-border"
        onClick={() => handleClick("Food")}
      >
        Food
      </button>
      <button
        className="text-text rounded-full m-1 hover:cursor-pointer px-4 py-1 hover:bg-surface border-2 border-border"
        onClick={() => handleClick("Travel")}
      >
        Travel
      </button>
      <button
        className="text-text rounded-full m-1 hover:cursor-pointer px-4 py-1 hover:bg-surface border-2 border-border"
        onClick={() => handleClick("Shopping")}
      >
        Shopping
      </button>
      <button
        className="text-text rounded-full m-1 hover:cursor-pointer px-4 py-1 hover:bg-surface border-2 border-border"
        onClick={() => handleClick("Bills")}
      >
        Bills
      </button>
    </>
  );
};

export default Buttons;
