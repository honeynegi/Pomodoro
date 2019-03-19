import React from "react";

const Timer = props => {
  return (
    <div>
      <h1>
        {props.minutes}:{props.seconds}
      </h1>
    </div>
  );
};

export default Timer;
