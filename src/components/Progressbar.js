import React, { Component } from 'react';
import { PropTypes } from "prop-types";
import { connect } from "react-redux";

class Progressbar extends Component {

  constructor(props) {
    super(props)
    this.state ={
      work: this.props.work,
      rest: this.props.rest
    }

  this.progression = this.progression.bind(this);

  }

  componentWillReceiveProps(nextProps) {
    if(nextProps.render === "invisible"){
        this.progression();
    }
}

  progression() {
    console.log('Here is where the function for the progress bar will be.');
  }

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
  rest: PropTypes.number.isRequired,
  render: PropTypes.string.isRequired
};

const mapStateToProps = state => ({
  work: state.makeClock.work,
  rest: state.makeClock.rest,
  render: state.render.render
});

export default connect (mapStateToProps, null)(Progressbar);