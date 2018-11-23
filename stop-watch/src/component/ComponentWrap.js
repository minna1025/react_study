import React, { Component } from 'react';
import TimeSet from '../TimeSet';
import TimeWrap from './TimeWrap';
import InputBox from './InputBox';
import Buttons from './Buttons';

class ComponentWrap extends Component {

  state = {
    hour: 0,
    min: 0,
    sec: 0,
    milliSec: 0,
    inputTime: '',
    stating: false
  }

  handleInput = (num) => {
    let time = Math.floor(num);
    let _sec = time % 60;
    let _min = time / 60;

    this.setState({
      inputTime: time,
      sec: Math.floor(_sec),
      min: Math.floor(_min % 60),
      hour: Math.floor(_min / 60),
    });
  }

  handleStart = (state) => {
    if( state ) {

    }
  }

  handleStop = (state) => {
    this.setState({
      stating: !state
    })
  }

  render() {
    const { hour, min, sec, milliSec, inputTime, stating } = this.state;
    return (
      <article>
        <TimeSet />
        <TimeWrap
          hour={hour}
          min={min}
          sec={sec}
          milliSec={milliSec}
          inputTime={inputTime}
         />
        <InputBox
          onInput={this.handleInput}
        />
        <Buttons
          onStart={this.handleStart}
          onStop={this.handleStop}
          state={stating}
        />
      </article>
    );
  }
}

export default ComponentWrap;