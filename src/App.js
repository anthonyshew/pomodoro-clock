import React, { Component } from 'react';
import './App.css';
import { Provider } from 'react-redux';
import store from './store';

import Timemaker from './components/Timemaker.js';
import Timer from './components/Timer.js';


class App extends Component {
  render() {
    return (
      <Provider store={store}>
      <div className="App">
        <div className="vp-center">
          <h1>A Pomodoro Clock</h1>
          <h2>WORK HARD, <span className="little-text"> but rest when you need to.</span></h2>
          < Timemaker title="Work" />
          < Timemaker title="Rest" />
          < button className="start-clock">Start</ button>
          < Timer phase="Work"/>
          < Timer phase="Rest"/>
          </div>
      </div>
      </Provider>
    );
  }
}

export default App;
