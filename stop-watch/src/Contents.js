import React, { Component } from 'react';
import TimeSet from './TimeSet';
import TimeWrap from './component/TimeWrap';
import InputBox from './component/InputBox';

class Contents extends Component {

  state = {
    hour: 0,
    min: 0,
    sec: 0,
    milliSec: 0,
    inputTime: '',
    stating: false
  }

  render() {
    return (
      <article>
        <TimeSet />
        <TimeWrap />
        <InputBox />
      </article>
    );
  }
}

export default Contents;