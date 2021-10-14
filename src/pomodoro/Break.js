import React from "react"
import { minutesToDuration } from "../utils/duration"; 

function Break({ breakDuration, setBreakDuration, session }) {

  const handleBreakMinus = () => {
    !session && breakDuration > 1 ? setBreakDuration((currentTime) => currentTime - 1 ) : setBreakDuration((currentTime) => currentTime + 0);
  }
    
  const handleBreakPlus = () => {
    !session && breakDuration < 15 ? setBreakDuration((currentTime) => currentTime + 1 ) : setBreakDuration((currentTime) => currentTime + 0);
  }

  return (
    <div className="input-group input-group-lg mb-2">
      <span className="input-group-text" data-testid="duration-break">
        Break Duration: {minutesToDuration(breakDuration)}
      </span>
      <div className="input-group-append">
        <button
          type="button"
          className="btn btn-secondary"
          data-testid="decrease-break"
          onClick={handleBreakMinus}>
          <span className="oi oi-minus" />
        </button>
        <button
          type="button"
          className="btn btn-secondary"
          data-testid="increase-break"
          onClick={handleBreakPlus}>
          <span className="oi oi-plus" />
        </button>
      </div>
    </div>
  );
}


export default Break;






















