import React from "react";

const IntervalTimer = props => {
  return (
    <div>
      <h1>
        {props.interval}:{props.intervalSeconds}
      </h1>
    </div>
  );
};

export default IntervalTimer;
