import React from "react";

const TimerInput = props => {
  return (
    <div>
      <h3>Input your desired time </h3>
      <input
        style={{ margin: "20px", border: "5px solid red" }}
        type="number"
        minutes={props.minutes}
        onChange={props.handlechange}
      />
    </div>
  );
};

export default TimerInput;
