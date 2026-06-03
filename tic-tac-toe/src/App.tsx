import { useState } from "react";

const Heading = () => {
  return <h1>Tic Tac Toe</h1>;
};

interface props {
  board: (string | null)[];
  handleClick: (index: number) => void;
}

const Button = ({ board, handleClick }: props) => {
  return (
    <div className="box">
      <div
        className="btn-group"
        role="group"
        aria-label="Basic outlined example"
      >
        <button
          type="button"
          className="btn btn-outline-primary"
          value={0}
          onClick={() => handleClick(0)}
        >
          {" "}
          {board[0]}
        </button>
        <button
          type="button"
          className="btn btn-outline-primary"
          value={1}
          onClick={() => handleClick(1)}
        >
          {board[1]}
        </button>
        <button
          type="button"
          className="btn btn-outline-primary"
          value={2}
          onClick={() => handleClick(2)}
        >
          {board[2]}
        </button>
      </div>
      <br />
      <div
        className="btn-group"
        role="group"
        aria-label="Basic outlined example"
      >
        <button
          type="button"
          className="btn btn-outline-primary"
          value={3}
          onClick={() => handleClick(3)}
        >
          {board[3]}
        </button>
        <button
          type="button"
          className="btn btn-outline-primary"
          value={4}
          onClick={() => handleClick(4)}
        >
          {board[4]}
        </button>
        <button
          type="button"
          className="btn btn-outline-primary"
          value={5}
          onClick={() => handleClick(5)}
        >
          {board[5]}
        </button>
      </div>
      <br />
      <div
        className="btn-group"
        role="group"
        aria-label="Basic outlined example"
      >
        <button
          type="button"
          className="btn btn-outline-primary"
          value={6}
          onClick={() => handleClick(6)}
        >
          {board[6]}
        </button>
        <button
          type="button"
          className="btn btn-outline-primary"
          value={7}
          onClick={() => handleClick(7)}
        >
          {board[7]}
        </button>
        <button
          type="button"
          className="btn btn-outline-primary"
          value={8}
          onClick={() => handleClick(8)}
        >
          {board[8]}
        </button>
      </div>
    </div>
  );
};

interface Props {
  status: React.ReactNode;
  handleclick2: () => void;
}

const Result = ({ status, handleclick2 }: Props) => {
  return (
    <>
      <button
        type="button"
        className="btn btn-primary reset"
        onClick={() => handleclick2()}
      >
        Reset
      </button>
      <div className="winner-status">
        {status ? status : <h2>Winning Status</h2>}
      </div>
    </>
  );
};
function App() {
  const [board, setBoard] = useState(Array(9).fill(null));
  const [current, newsym] = useState("X");
  const [count, setCount] = useState(0);
  const handleClick = (index: number) => {
    if (checkWinner()) return;
    if (count === 9) return;
    if (board[index]) return;

    const newboard: (string | null)[] = [...board];
    newboard[index] = current;
    setBoard(newboard);
    newsym(current === "X" ? "O" : "X");
    setCount(count + 1);
  };
  let winPattern = [
    [0, 1, 2],
    [3, 4, 5],
    [6, 7, 8],
    [0, 3, 6],
    [1, 4, 7],
    [2, 5, 8],
    [0, 4, 8],
    [2, 4, 6],
  ];
  const checkWinner = () => {
    if (count != 9) {
      for (let pattern of winPattern) {
        let p1 = board[pattern[0]];
        let p2 = board[pattern[1]];
        let p3 = board[pattern[2]];
        if (p1 != null && p1 == p2 && p2 == p3) {
          return <h2>winner {p1}</h2>;
        }
      }
    } else {
      return <h2>GAME DRAW</h2>;
    }
  };
  const handleclick2 = () => {
    setBoard(Array(9).fill(null));
    newsym("X");
    setCount(0);
  };
  return (
    <>
      <Heading />
      <Button board={board} handleClick={handleClick} />
      <Result status={checkWinner()} handleclick2={handleclick2} />
    </>
  );
}

export default App;
