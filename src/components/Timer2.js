import React, { Component } from 'react';
import { PropTypes } from "prop-types";
import { connect } from "react-redux";

class Timer extends Component {

  render() {
    if(this.props.phase === "Work") {
    return (
      <div className="timer">
        < button className="start-clock">Start</ button>
        <div className="display-">
            {this.props.work}
        </div>
        <div className="phase-timer">
            {this.props.phase}
        </div>
    </div>
    )
  } else {
    return (
      <div className="timer">
            < button className="start-clock">Start</ button>
        <div className="display-">
            {this.props.rest}
        </div>
        <div className="phase-timer">
            {this.props.phase}
        </div>
    </div>
    )
  }
}
};

Timer.propTypes = {
  work: PropTypes.number.isRequired,
  rest: PropTypes.number.isRequired,
};

const mapStateToProps = state => ({
  work: state.makeClock.work,
  rest: state.makeClock.rest,
});

export default connect (mapStateToProps, null)(Timer);