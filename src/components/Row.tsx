import React from "react";
import { letters } from "../hooks/useWordle";
type iProps = {
  guess: letters[];
  currentGuess: string;
};

const Row = ({ guess, currentGuess }: iProps) => {
  if (guess) {
    return (
      <div className="row past">
        {guess?.map((g, i) => (
          <div key={i} className={g.color}>
            {g.key}
          </div>
        ))}
      </div>
    );
  }
  if (currentGuess) {
    let currGuess = currentGuess.split("");
    return (
      <div className="row current">
        {currGuess?.map((c, i) => (
          <div className="filled" key={i}>{c}</div>
        ))}
        {[...Array(5-currGuess.length)].map((c,i)=>(
            <div key={i}></div>
        ))}
      </div>
    );
  }

  return (
    <div className="row">
      <div></div>
      <div></div>
      <div></div>
      <div></div>
      <div></div>
    </div>
  );
};

export default Row;
