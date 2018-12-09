import React, { Component } from 'react';
import { PropTypes } from "prop-types";
import { connect } from "react-redux";

class Progressbar extends Component {

  constructor(props) {
    super(props)
    this.state ={
      work: this.props.work,
      rest: this.props.rest,
      time: (this.props.work + this.props.rest) * 60,
      width: .5,
      interval: '',
      progression: () => {
        // eslint-disable-next-line
        let timer = this.state.time, minutes, seconds;
        let elem = document.querySelector(".progress-bar");
        let width = this.state.width;
        let widthIncrement = 100.5 / ((this.props.work + this.props.rest) * 60)
        console.log({
          'work': this.props.work,
          'rest': this.props.rest,
          'width': this.state.width,
          'widthIncrement': widthIncrement
        })

        minutes = parseInt(timer / 60, 10)
        seconds = parseInt(timer % 60, 10);
    
        minutes = minutes < 10 ? minutes : minutes;
        seconds = seconds < 10 ? "0" + seconds : seconds;

        elem.style.width = width + '%';

        this.setState({
          time: this.state.time - 1,
          width: width + widthIncrement
        });
                    
        if (this.state.time < 0) {
          clearInterval(this.state.interval);
        }
      },
    }

  }

  componentWillReceiveProps(nextProps) {
    if(nextProps.render === "invisible"){
      this.setState({
        interval: setInterval(this.state.progression, 1000)
      })
    } else {
      this.setState({
        interval: clearInterval(this.state.interval),
        width: .5
      })
    }
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