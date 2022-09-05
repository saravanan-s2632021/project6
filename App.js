import "./styles.css";
import { useState } from "react";
const Square = ({ id }) => {
  const [color, SetColor] = useState("green");
  const [mount, SetMount] = useState(true);

  const palet = ["red", "blue", "green"];
  const getRandomcolor = () => SetMount(!mount);
  return (
    mount && (
      <button
        onClick={(e) => {
          SetColor(getRandomcolor());
          e.target.style.background = color;
        }}
      >
        <h1>{id}</h1>
      </button>
    )
  );
};

export default function App() {
  const [player, setPlayer] = useState(0);
  let status = `player ${player}`;
  function renderSquare(status) {
    return <Square id={status}></Square>;
  }

  return (
    <div
      className="game-board"
      onClick={(e) => {
        setPlayer((player + 1) % 2);
      }}
    >
      <div className="grid-row">
        {renderSquare(status)}
        {renderSquare(status)}
        {renderSquare(status)}
      </div>
      {status}
    </div>
  );
}
