import React, { Component } from 'react';

export default class Timer extends Component {

  constructor(props) {
    super(props);

    this.state = {
      counter: 5
    }

    this.timeChange = this.timeChange.bind(this);
  }

  timeChange(e) {
    if (e.target.className === "decrementer") {
      this.setState({
        counter: this.state.counter - 1
      })
    } else if (e.target.className === "incrementer") {
      this.setState({
        counter: this.state.counter + 1
      })
    }
  }

  render() {
    return (
      <div className="timemaker">
        <h2>{this.props.title}</h2>
        <div className="timer-setter">
          <span className="decrementer"  onClick={this.timeChange}>Less time!</span>
          <span className="time-adjuster">{this.state.counter}</span>
          <span className="incrementer" onClick={this.timeChange}>More time!</span>
        </div>
      </div>
    )
  }
};