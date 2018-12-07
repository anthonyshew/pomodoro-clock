import React, { Component } from 'react';
import { PropTypes } from "prop-types";
import { connect } from "react-redux";

class Timer extends Component {
    
    constructor(props) {
        super(props);
        this.state = {
            formattedTime: (this.props.work + this.props.rest) + " minutes",
            time: (this.props.work + this.props.rest) * 60,
            clock: (duration) => {
                if(this.state.isCounting === true) {
                    let timer = this.state.time, minutes, seconds;
                    minutes = parseInt(timer / 60, 10)
                    seconds = parseInt(timer % 60, 10);
    
                    minutes = minutes < 10 ? minutes : minutes;
                    seconds = seconds < 10 ? "0" + seconds : seconds;

                    this.setState({
                        time: this.state.time - 1,
                    })
    
                    document.querySelector("#display").innerHTML = minutes + ":" + seconds;
            
                    if (--timer < 0) {
                        timer = duration;
                    }
                }
            },
            isCounting: false,
        }
        this.startTimer = this.startTimer.bind(this);
        this.resumeTimer = this.resumeTimer.bind(this);
        this.stopTimer = this.stopTimer.bind(this);
        this.stater = this.stater.bind(this);
    }

    startTimer() {
        this.setState({
            isCounting: true,
        });
       setInterval(this.state.clock, 1000)
    }

    resumeTimer() {
        this.setState({
            isCounting: true,
        })
    }

    stopTimer() {
        clearInterval(this.state.clock);
        this.setState({
            isCounting: false
        })
    }

    stater() {
        console.log(this.state);
    }

  render() {
    return(
        <div className="timer">
            <button className="start-clock" onClick={this.startTimer}>Start</button>
            <button className="start-clock" onClick={this.stopTimer}>Stop</button>
            <button className="start-clock" onClick={this.resumeTimer}>Resume</button>
            <button className="start-clock" onClick={this.stater}>Stater</button>
            <div id="display">{this.state.formattedTime}</div>
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