import React, { Component } from 'react'

export default class Timer extends Component {
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