import React, { Component } from 'react';
import { PropTypes } from "prop-types";
import { connect } from "react-redux";

class Timer extends Component {
    
    constructor(props) {
        super(props);
        this.startTimer = this.startTimer.bind(this);
    }

    startTimer(duration) {
        let timer = (this.props.work + this.props.rest) * 60, minutes, seconds;
        setInterval(function () {
            minutes = parseInt(timer / 60, 10)
            seconds = parseInt(timer % 60, 10);
    
            minutes = minutes < 10 ? "0" + minutes : minutes;
            seconds = seconds < 10 ? "0" + seconds : seconds;
    
            document.querySelector("#display").innerHTML = minutes + ":" + seconds;
    
            if (--timer < 0) {
                timer = duration;
            }
        }, 1000);
    }

  render() {
    return(
        <div className="timer">
            <button className="start-clock" onClick={this.startTimer}>Start</button>
            <div id="display"></div>
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