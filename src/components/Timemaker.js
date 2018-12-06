import React, { Component } from 'react';
import { PropTypes } from "prop-types";
import { connect } from "react-redux";

import { workSet, restSet } from '../actions/makeActions.js'

class Timemaker extends Component {

  constructor(props) {
    super(props);

    this.state = {
      workCounter: 5,
      restCounter: 4,
    }

    this.timeChange = this.timeChange.bind(this);
  }

  timeChange(e) {
    if (e.target.className === "decrementer-Work") {
      if (this.state.workCounter >= 1) {
        let work = this.state.workCounter - 1;
        this.setState({
          workCounter: this.state.workCounter - 1
        });
        workSet(work);
      } else {
        console.log("We can't do negative time!");
      }
    } else if (e.target.className === "incrementer-Work") {
      if (this.state.workCounter <= 59) {
        let work = this.state.workCounter + 1;
        this.setState({
          workCounter: this.state.workCounter + 1
        });
        workSet(work);
      } else {
        console.log("More than hour?! You don't even need a Pomodoro Clock!");
      }
    } else if (e.target.className === "decrementer-Rest") {
        if (this.state.restCounter >= 1) {
          let rest = this.state.restCounter - 1;
          this.setState({
            restCounter: this.state.restCounter - 1
          });
          restSet(rest);
        } else {
          console.log("We can't do negative time!");
        }
      } else if (e.target.className === "incrementer-Rest") {
        if (this.state.restCounter <= 59) {
          let rest = this.state.restCounter + 1;
          this.setState({
            restCounter: this.state.restCounter + 1
          });
          restSet(rest);
        } else {
          console.log("More than hour?! You don't even need a Pomodoro Clock!");
        }
    }
}

  render() {
    return (
      <div className="timemaker">
        <h2 className="phase-maker">{this.props.phase}</h2>
        <div className="timer-setter-">
          <span className={"decrementer-"+this.props.phase} onClick={this.timeChange}>Less time!</span>
          <span className="time-adjuster">{this.state.workCounter}{this.state.restCounter}</span>
          <span className={"incrementer-"+this.props.phase} onClick={this.timeChange}>More time!</span>
        </div>
      </div>
    )
  }
};

Timemaker.propTypes = {
  workSet: PropTypes.func.isRequired,
  restSet: PropTypes.func.isRequired
}

export default connect(null, { workSet, restSet }) (Timemaker);