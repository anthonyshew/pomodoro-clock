import React, { Component } from 'react';
import Timemaker from './components/Timemaker.js';
import Timer from './components/Timer.js';
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        <div className="vp-center">
      <h1>A Pomodoro Clock</h1>
      <h2>WORK HARD, <span className="little-text"> but rest when you need to.</span></h2>
        < Timemaker title="Work" />
        < Timemaker title="Rest" />
        <button className="start-clock">Start</button>
        < Timer time="20:00" phase="Work"/>
        < Timer time="10:00" phase="Rest"/>
        </div>
      </div>
    );
  }
}

export default App;
