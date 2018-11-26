import React, { Component } from 'react';
import Time from './Time';

class TimeWrap extends Component {
  constructor(props) {
    super(props);
    this.state = {
      milliSec: 0,
      inputTime: 0,
      stating: false
    }
  }

  render() {
    const { inputTime } = this.props;
    const time = new Time();
    return (
      <div className="time-wrap" id='time_wrap'>
        {time.getTime(inputTime)}
      </div>
    )
  }
}

export default TimeWrap;