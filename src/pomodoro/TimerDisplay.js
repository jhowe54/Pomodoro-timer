import React from "react";
import { minutesToDuration, secondsToDuration } from "../utils/duration";

function TimerDisplay({ session, focusDuration, breakDuration, aria }) {
  
  return (
    <div>
      {session && (
        <div className="row mb-2">
          <div className="col">
            <h2 data-testid="session-title">
              {session?.label === "Focusing"
                ? `Focusing for ${minutesToDuration(focusDuration)} minutes`
                : `On break for ${minutesToDuration(breakDuration)} minutes`}
            </h2>
            <p className="lead" data-testid="session-sub-title">
              {secondsToDuration(session?.timeRemaining)} remaining
            </p>
          </div>
        </div>
      )}
      {session && (
        <div className="row mb-2">
          <div className="col">
            <div className="progress" style={{ height: "20px" }}>
              <div
                className="progress-bar"
                role="progressbar"
                aria-valuemin="0"
                aria-valuemax="100"
                aria-valuenow={aria} // TODO: Increase aria-valuenow as elapsed time increases
                style={{ width: `${aria}%` }} // TODO: Increase width % as elapsed time increases
              />
            </div>
          </div>
        </div>
      )}
    </div>
  );
}

export default TimerDisplay;
