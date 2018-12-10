import React, { Component } from 'react';
import { PropTypes } from "prop-types";
import { connect } from "react-redux";

import { reRender } from '../actions/renderActions.js'


class Timer extends Component {
    
    constructor(props) {
        super(props);
        this.state = {
            work: this.props.work * 60,
            rest: this.props.rest * 60,
            time: (this.props.work + this.props.rest) * 60,
            interval: '',
            clock: () => {
                if(this.state.isCounting === true) {
                    let timer = this.state.time, minutes, seconds;
                    minutes = parseInt(timer / 60, 10);
                    seconds = parseInt(timer % 60, 10);
    
                    minutes = minutes < 10 ? minutes : minutes;
                    seconds = seconds < 10 ? "0" + seconds : seconds;

                    this.setState({
                        time: this.state.time - 1,
                    })
    
                    document.querySelector("#display-total").innerHTML = minutes + ":" + seconds;
            
                    if (this.state.time < this.props.rest * 60) {
                        reRender('invisible', false, true)
                        this.setState({
                            isWorking: false,
                            isResting: true,
                            status: 'You are resting.'
                        }) };
                    
                        if (this.state.time < 0) {
                            document.querySelector(".start-clock").style.display = 'inline-block';
                            document.querySelectorAll(".btn-clock").forEach(elem => {elem.style.display = 'none'});
                            document.querySelector("#display-total").innerHTML = this.props.work + this.props.rest + " total minutes";
                                clearInterval(this.state.interval);
                                reRender('visible', false, false);
                            this.setState({
                                time: (this.props.work + this.props.rest) * 60,
                                isCounting: false,
                                status: 'Waiting...'
                            });
                        };
                }
            },
            isCounting: false,
            isWorking: false,
            isResting: false,
            status: 'Waiting...'
        }
        this.Timer = this.Timer.bind(this);
        this.resetTimer = this.resetTimer.bind(this);

    }

    Timer() {
        if(document.querySelector("#display-total").innerHTML === this.props.work + this.props.rest + " total minutes") {
            this.setState({
                time: (this.props.work + this.props.rest) * 60,
                interval: setInterval(this.state.clock, 1000),
                isCounting: true,
                isWorking: true,
                isResting: false,
                status: 'You are working!'
            });
            document.querySelector(".start-clock").style.display = 'none';
            document.querySelectorAll(".btn-clock").forEach(elem => {elem.style.display = 'inline-block'});
            reRender('invisible', true, false);
        }
    };

    resetTimer() {
        document.querySelector(".start-clock").style.display = 'inline-block';
        document.querySelectorAll(".btn-clock").forEach(elem => {elem.style.display = 'none'});
        document.querySelector("#display-total").innerHTML = this.props.work + this.props.rest + " total minutes";
        clearInterval(this.state.interval);
        reRender('visible', false, false);
        this.setState({
            time: (this.props.work + this.props.rest) * 60,
            isCounting: false,
            isWorking: false,
            isResting: false,
            status: 'Waiting...'
        });
    };

  render() {
    return(
        <div className="timer">
            <div className="status">{this.state.status}</div>
            <button className="start-clock" onClick={this.Timer}>Start</button>
            <button className="btn-clock" onClick={this.resetTimer}>Reset</button>
            <div id="display-total">{this.props.work + this.props.rest + " total minutes"}</div>
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

export default connect (mapStateToProps, { reRender })(Timer);