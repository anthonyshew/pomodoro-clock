import React, { Component } from 'react';
import './App.css';
import { Provider } from 'react-redux';
import store from './store';

import Timemaker from './components/Timemaker.js';
import Timer from './components/Timer.js';
import Progressbar from './components/Progressbar.js';


class App extends Component {
  render() {
    return (
      <Provider store={store}>
      <div className="App">
        <div className="vp-center">
          <h1>A Pomodoro Clock</h1>
          <h2>WORK HARD, <span className="little-text"> but rest when you need to.</span></h2>
          < Timemaker phase="Work" />
          < Timemaker phase="Rest" />
          < Timer />
          </div>
          < Progressbar />
      </div>
      </Provider>
    );
  }
}

export default App;
