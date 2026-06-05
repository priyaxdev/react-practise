import rockImg from "./component/rock.png";
import paperImg from "./component/paper.png";
import scissorsImg from "./component/scissors.png";
import { useState } from "react";

type Choice = {
  name: string;
  img: string;
};

const choices: Choice[] = [
  { name: "rock", img: rockImg },
  { name: "paper", img: paperImg },
  { name: "scissors", img: scissorsImg },
];

interface Props {
  handleClick: (name: string) => void;
}

const Image = ({ handleClick }: Props) => {
  return (
    <>
      <h2 className="title">ROCK PAPER SCISSOR</h2>

      <div className="choices-container">
        {choices.map((choice: Choice) => (
          <img
            key={choice.name}
            src={choice.img}
            alt={choice.name}
            className="choice-img"
            onClick={() => handleClick(choice.name)}
          />
        ))}
      </div>
    </>
  );
};

interface props {
  userCount: number;
  compCount: number;
}

const Leaderboard = ({ userCount, compCount }: props) => {
  return (
    <>
      <h2 style={{ textAlign: "center" }}>YOU {userCount}</h2>
      <h2 style={{ textAlign: "center" }}>Computer {compCount}</h2>
    </>
  );
};
interface prop {
  result: string;
}

const Result = ({ result }: prop) => {
  return (
    <div
      className="winner"
      style={{
        backgroundColor: result.includes("loss")
          ? "tomato"
          : result.includes("win") && !result.includes("winning status")
            ? "lightgreen"
            : "grey",
      }}
    >
      <h2>{result}</h2>
    </div>
  );
};

function App() {
  const [userCount, setuserCount] = useState(0);
  const [compCount, setCompCount] = useState(0);
  const [result, setresult] = useState("Make your move!");

  const handleClick = (name: string) => {
    const randIdx = Math.floor(Math.random() * 3);
    const comp = choices[randIdx].name;

    if (name === comp) {
      setresult("Match draw");
    } else if (name === "rock" && comp === "paper") {
      setCompCount(compCount + 1);
      setresult("ohhh shit computer chose paper u lose");
    } else if (name === "paper" && comp === "scissors") {
      setCompCount(compCount + 1);
      setresult("better luck next time computer chose scissors u loss");
    } else if (name === "scissors" && comp === "rock") {
      setCompCount(compCount + 1);
      setresult("try again computer chose rock u loss");
    } else {
      setuserCount(userCount + 1);
      setresult("u win! 🎉");
    }
  };

  return (
    <>
      <Image handleClick={handleClick} />
      <Leaderboard userCount={userCount} compCount={compCount} />
      <Result result={result} />
    </>
  );
}

export default App;
