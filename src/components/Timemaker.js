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
    if (e.target.className === "fas fa-angle-down decrementer-Work") {
      if (this.state.workCounter >= 2) {
        let work = this.state.workCounter - 1;
        this.setState({
          workCounter: this.state.workCounter - 1
        });
        workSet(work);
      } else {
        console.log("We can't do negative time!");
      }
    } else if (e.target.className === "fas fa-angle-up incrementer-Work") {
      if (this.state.workCounter <= 59) {
        let work = this.state.workCounter + 1;
        this.setState({
          workCounter: this.state.workCounter + 1
        });
        workSet(work);
      } else {
        console.log("More than hour?! You don't even need a Pomodoro Clock!");
      }
    } else if (e.target.className === "fas fa-angle-down decrementer-Rest") {
        if (this.state.restCounter >= 2) {
          let rest = this.state.restCounter - 1;
          this.setState({
            restCounter: this.state.restCounter - 1
          });
          restSet(rest);
        } else {
          console.log("We can't do negative time!");
        }
      } else if (e.target.className === "fas fa-angle-up incrementer-Rest") {
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
    if(this.props.phase === 'Work' && this.props.visibility === 'visible') {
    return (
      <div className={"timemaker-"+this.props.phase}>
        <h2 className="phase-maker">{this.props.phase}</h2>
        <div className="timer-setter">
          <i className={"fas fa-angle-down decrementer-"+this.props.phase} onClick={this.timeChange}></i>
          <span id="l" className="time-adjuster">{this.state.workCounter}</span>
          <i className={"fas fa-angle-up incrementer-"+this.props.phase} onClick={this.timeChange}></i>
        </div>
      </div>
    )
  } else if(this.props.phase === 'Work' && this.props.visibility === 'invisible') {
    return (
      <div className={"timemaker-"+this.props.phase}>
        <h2 className="phase-maker">{this.props.phase}</h2>
        <div className="timer-setter">
          <span id="l" className="time-adjuster">{this.state.workCounter}</span>
        </div>
      </div>
    )
    } else if (this.props.phase === 'Rest' && this.props.visibility === 'visible') {
    return (
      <div className={"timemaker-"+this.props.phase}>
        <h2 className="phase-maker">{this.props.phase}</h2>
        <div className="timer-setter">
          <i className={"fas fa-angle-down decrementer-"+this.props.phase} onClick={this.timeChange}></i>
          <span id="l" className="time-adjuster">{this.state.restCounter}</span>
          <i className={"fas fa-angle-up incrementer-"+this.props.phase} onClick={this.timeChange}></i>
        </div>
      </div>
    )
     } else if (this.props.phase === 'Rest' && this.props.visibility === 'invisible') {
  return (
    <div className={"timemaker-"+this.props.phase}>
      <h2 className="phase-maker">{this.props.phase}</h2>
      <div className="timer-setter">
        <span className="time-adjuster">{this.state.restCounter}</span>
      </div>
    </div>
  )
}
}
};

Timemaker.propTypes = {
  workSet: PropTypes.func.isRequired,
  restSet: PropTypes.func.isRequired
};

const mapStateToProps = state => ({
  visibility: state.render.render,
  rest: state.makeClock.rest,
});

export default connect(mapStateToProps, { workSet, restSet }) (Timemaker);