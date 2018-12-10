import React, { Component } from 'react';
import { PropTypes } from "prop-types";
import { connect } from "react-redux";

import tomato from '../media/tomato.png';

import Upbeep from '../media/restStart.wav';
import Downbeep from '../media/restEnd.wav';

class Tomato extends Component {

  componentWillReceiveProps(nextProps) {
    if(nextProps.isResting === true){
      document.querySelector(".tomato").classList.add("jello-horizontal");
      let sound = new Audio(Upbeep);
      sound.play();

    } else if (nextProps.isResting === false) {
      document.querySelector(".tomato").classList.remove("jello-horizontal");
      let sound = new Audio(Downbeep);
      sound.play();
    }
  }

  render() {
    return(
      <div>
        <img className="tomato" src={tomato} alt="Tomato!" />
      </div>
    )
  }
};

Tomato.propTypes = {
  isResting: PropTypes.bool.isRequired
};

const mapStateToProps = state => ({
  isResting: state.render.isResting
});

export default connect (mapStateToProps, null)(Tomato);