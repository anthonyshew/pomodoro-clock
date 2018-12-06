import React, { Component } from 'react';
import { PropTypes } from "prop-types";
import { connect } from "react-redux";

import { timeSet } from '../actions/makeActions.js'

class Timemaker extends Component {

  constructor(props) {
    super(props);

    this.state = {
      counter: 5
    }

    this.timeChange = this.timeChange.bind(this);
  }

  timeChange(e) {
    if (e.target.className === "decrementer") {
      if (this.state.counter >= 1) {
        let num = this.state.counter - 1;
        this.setState({
          counter: this.state.counter - 1
        });
        timeSet(num, e);
      } else {
        console.log("We can't do negative time!");
      }
    } else if (e.target.className === "incrementer") {
      if (this.state.counter <= 59) {
        let num = this.state.counter + 1;
        this.setState({
          counter: this.state.counter + 1
        });
        timeSet(num, e);
      } else {
        console.log("More than hour?! You don't even need a Pomodoro Clock!");
      }
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

Timemaker.propTypes = {
  timeSet: PropTypes.func.isRequired
}

export default connect(null, { timeSet }) (Timemaker);