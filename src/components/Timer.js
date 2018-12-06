import React, { Component } from 'react';
import { PropTypes } from "prop-types";
import { connect } from "react-redux";

class Timer extends Component {

  render() {
    return (
      <div className="timer">
        <div className="display-">
            {this.props.work}{this.props.rest}
        </div>
        <div className="phase-timer">
            {this.props.phase}
        </div>
    </div>
    )
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