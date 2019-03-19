import React, { Component } from "react";
import styles from "./App.module.css";
import TimerInput from "../Components/TimerInput/TimerInput";
import Timer from "../Components/Timer/Timer";
import StartButton from "../Components/StartButton/StartButton";
import Interval from "../Components/Interval/Interval";
import IntervalTimer from "../Components/IntervalTimer/IntervalTimer";

class App extends Component {
  state = {
    minutes: "",
    seconds: "00",
    startTimer: true,
    interval: "",
    intervalSeconds: "00"
  };

  tick = () => {
    var min = Math.floor(this.secondsRemaining / 60);
    var sec = this.secondsRemaining - min * 60;
    console.log(min, sec);
    this.setState({
      minutes: min,
      seconds: sec
    });
    if (sec < 10) {
      this.setState({
        seconds: "0" + this.state.seconds
      });
    }
    if (min < 10) {
      this.setState({
        minutes: "0" + this.state.minutes
      });
    }
    if ((min === 0) & (sec === 0)) {
      clearInterval(this.intervalHandle);
      console.log("timer ended");
      this.setState({
        interval: this.state.interval
      });
      let time = this.state.intervalSeconds + this.state.interval * 60;
      this.secondsRemaining = time;
      this.intervalHandlePause = setInterval(this.intervalTick, 1000);
      console.log(this.state.interval);
    }
    this.secondsRemaining--;
  };
  intervalTick = () => {
    var min = Math.floor(this.secondsRemaining / 60);
    var sec = this.secondsRemaining - min * 60;

    this.setState({
      interval: min,
      intervalSeconds: sec
    });
    if (min === 0 && sec === 0) {
      clearInterval(this.intervalHandlePause);
      console.log("Tick ended");
    }
    this.secondsRemaining--;
  };
  startCountDown = () => {
    console.log("--------CountDown---------");
    console.log(this.state.minutes);
    console.log(this.state.interval);

    if (this.state.startTimer === true) {
      if (this.state.seconds <= 0 && this.state.minutes <= 0) {
        console.log("---------if for interval----------");
        if (this.state.interval === 0 && this.state.intervalSeconds === 0) {
          console.log("--------Enter the time----------");
          clearInterval(this.intervalHandlePause);
        } else {
          clearInterval(this.intervalHandle);
          let time = this.state.intervalSeconds - 1 + this.state.interval * 60;
          this.secondsRemaining = time;
          this.intervalHandlePause = setInterval(this.intervalTick, 1000);
          console.log(this.state.interval);
          this.setState({
            startTimer: false
          });
        }
      } else {
        console.log("--------------else for minutes");
        let time = this.state.seconds - 1 + this.state.minutes * 60;
        this.secondsRemaining = time;
        this.intervalHandle = setInterval(this.tick, 1000);
        this.setState({
          startTimer: false
        });
      }
      console.log(this.state.startTimer);
    }
    if (this.state.startTimer === false) {
      clearInterval(this.intervalHandlePause);
      clearInterval(this.intervalHandle);
      this.setState({
        minutes: this.state.minutes,
        seconds: this.state.seconds,
        interval: this.state.interval,
        intervalSeconds: this.state.intervalSeconds,
        startTimer: true
      });

      console.log(this.state.startTimer);
    }
  };

  handleChange = event => {
    this.setState({
      minutes: event.target.value
    });
  };

  handleIntervalChange = event => {
    this.setState({
      interval: event.target.value
    });
  };

  Timer = () => {
    if (this.state.minutes === 0 && this.state.seconds === 0) {
      return (
        <IntervalTimer
          interval={this.state.interval}
          intervalSeconds={this.state.intervalSeconds}
        />
      );
    } else {
      return (
        <Timer minutes={this.state.minutes} seconds={this.state.seconds} />
      );
    }
  };

  render() {
    return (
      <div className={styles.App}>
        <h1>POMODORO</h1>

        <TimerInput
          minutes={this.state.minutes}
          handlechange={this.handleChange}
        />
        <Interval
          interval={this.state.interval}
          intervalhandle={this.handleIntervalChange}
        />
        <div style={{ margin: "30px" }}>
          {this.Timer()}
          {/* <Timer minutes={this.state.minutes} seconds={this.state.seconds} /> */}
          <StartButton onClick={this.startCountDown} />
        </div>
      </div>
    );
  }
}

export default App;
