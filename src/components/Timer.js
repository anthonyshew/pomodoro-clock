import React, { Component } from 'react';
import { PropTypes } from "prop-types";
import { connect } from "react-redux";

class Timer extends Component {

  shouldComponentUpdate(nextProps) {
    console.log(nextProps.time);
    return true;
}
  render() {
    return (
      <div className="timer">
        <div className="display">
            {this.props.time}
        </div>
        <div className="phase">
            {this.props.phase}
        </div>
    </div>
    )
  }
};

Timer.propTypes = {
  time: PropTypes.number.isRequired,
};

const mapStateToProps = state => ({
  time: state.makeClock.time,
});

export default connect (mapStateToProps, null)(Timer);