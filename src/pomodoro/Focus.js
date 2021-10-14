import React from "react";
import { minutesToDuration } from "../utils/duration"; 

function Focus({ focusDuration, setFocusDuration, session }) {

  const handleFocusMinus = () => {
    !session && focusDuration > 5 ? setFocusDuration((currentTime) => currentTime -5 ) : setFocusDuration((currentTime) => currentTime + 0);
  }

  const handleFocusPlus = () => {
    !session && focusDuration < 60 ? setFocusDuration((currentTime) => currentTime + 5 ) : setFocusDuration((currentTime) => currentTime +0);
  }

  return (
    <div className="input-group input-group-lg mb-2">
      <span className="input-group-text" data-testid="duration-focus">
        Focus Duration: {minutesToDuration(focusDuration)}
      </span>
      <div className="input-group-append">
        <button
          type="button"
          className="btn btn-secondary"
          data-testid="decrease-focus"
          onClick={handleFocusMinus}>
          <span className="oi oi-minus" />
        </button>
        <button
          type="button"
          className="btn btn-secondary"
          data-testid="increase-focus"
          onClick={handleFocusPlus}>
          <span className="oi oi-plus" />
        </button>
      </div>
    </div>
  );

}

export default Focus;