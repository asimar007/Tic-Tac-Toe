import React, { useState } from "react";
import Square from "./Square";

const Border = () => {
  const [state, setState] = useState(Array(9).fill(null));
  //console.log(state);
  const [isXTurn, setIsTurn] = useState(true);
  const checkWinner = () => {
    const winnerLogic = [
      [0, 1, 2],
      [3, 4, 5],
      [6, 7, 8],
      [0, 3, 6],
      [1, 4, 7],
      [2, 5, 8],
      [2, 4, 6],
      [0, 4, 8],
    ];
    // Check for a winner
    for (let logic of winnerLogic) {
      const [a, b, c] = logic;
      if (state[a] !== null && state[a] === state[b] && state[a] === state[c]) {
        return state[a];
      }
    }

    // Check for a draw
    if (state.every((square) => square !== null)) {
      return "Draw";
    }
    return false;
  };
  const isWinner = checkWinner();

  const handleClick = (index) => {
    if (state[index] !== null) {
      return;
    }
    //console.log("Index of:-", index);
    const copyState = [...state];
    copyState[index] = isXTurn ? "X" : "O";
    setState(copyState);
    setIsTurn(!isXTurn);
  };
  const handleReset = () => {
    setState(Array(9).fill(null));
  };

  return (
    <div className="board-container">
      {isWinner ? (
        <>
          {isWinner === "Draw" ? (
            <>
              It's a Draw!{" "}
              <button
                onClick={handleReset}
                style={{
                  backgroundColor: "skyblue",
                  color: "white",
                  border: "none",
                  borderRadius: "5px",
                  padding: "10px 20px",
                  cursor: "pointer",
                  boxShadow: "0 2px 4px rgba(0, 0, 0, 0.1)",
                  transition: "background-color 0.3s ease",
                }}
              >
                Play Again
              </button>
            </>
          ) : (
            <>
              {isWinner} Won The Game{" "}
              <button
                onClick={handleReset}
                style={{
                  backgroundColor: "red",
                  color: "black",
                  border: "none",
                  borderRadius: "5px",
                  padding: "10px 20px",
                  cursor: "pointer",
                  boxShadow: "0 2px 4px rgba(0, 0, 0, 0.1)",
                  transition: "background-color 0.3s ease",
                }}
              >
                Play Again
              </button>
            </>
          )}
        </>
      ) : (
        <>
          <h1>Player {isXTurn ? "X" : "O"} please Move</h1>
          <div className="border-row">
            <Square onClick={() => handleClick(0)} value={state[0]} />
            <Square onClick={() => handleClick(1)} value={state[1]} />
            <Square onClick={() => handleClick(2)} value={state[2]} />
          </div>
          <div className="border-row">
            <Square onClick={() => handleClick(3)} value={state[3]} />
            <Square onClick={() => handleClick(4)} value={state[4]} />
            <Square onClick={() => handleClick(5)} value={state[5]} />
          </div>
          <div className="border-row">
            <Square onClick={() => handleClick(6)} value={state[6]} />
            <Square onClick={() => handleClick(7)} value={state[7]} />
            <Square onClick={() => handleClick(8)} value={state[8]} />
          </div>
        </>
      )}
    </div>
  );
};

export default Border;
