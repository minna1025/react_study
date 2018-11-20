import React, { Component } from 'react';

class TimeWrap extends Component {
  constructor(props) {
    super(props);
    this.state = {
      hour: 0,
      min: 0,
      sec: 0,
      milliSec: 0,
      inputTime: '',
      stating: false
    }
  }

  render() {
    const { hour, min, sec, milliSec } = this.props;
    console.log('this.peops : ', this.props)
    return (
      <div className="time-wrap" id='time_wrap'>
        <span id="hour">
          {
            hour < 10 ?
            '0' + hour : hour
          } 
        </span>
        : 
        <span id="min">
          {
            min < 10 ?
            '0' + min : min
          } 
        </span> 
        :
        <span id="sec">
          {
            sec < 10 ?
            '0' + sec : sec
          } 
        </span>
        : 
        <span id="milliSec">
          {
            milliSec < 10 ?
            '0' + milliSec : milliSec
          }
        </span>
      </div>
    )
  }
}

export default TimeWrap;