import React, { Component } from 'react';
import { PropTypes } from "prop-types";
import { connect } from "react-redux";

class Progressbar extends Component {

  render() {
    return(
        <div className="progress">
            <div className="progress-bar"></div>
        </div>
    )
  }
};

Progressbar.propTypes = {
  work: PropTypes.number.isRequired,
  rest: PropTypes.number.isRequired
};

const mapStateToProps = state => ({
  work: state.makeClock.work,
  rest: state.makeClock.rest,
});

export default connect (mapStateToProps, null)(Progressbar);