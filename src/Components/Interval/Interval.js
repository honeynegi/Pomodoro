import React from "react";

const Interval = props => {
  const styles = {
    margin: "20px",
    border: "5px solid green"
  };
  return (
    <div style={{ textAlign: "left" }}>
      <h3>Input your desired Interval</h3>
      <input
        style={styles}
        type="number"
        interval={props.interval}
        onChange={props.intervalhandle}
      />
    </div>
  );
};

export default Interval;
