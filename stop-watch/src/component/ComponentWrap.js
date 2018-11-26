import React, { Component } from 'react';
import TimeSet from '../TimeSet';
import TimeWrap from './TimeWrap';
import InputBox from './InputBox';
import Buttons from './Buttons';

class ComponentWrap extends Component {

  state = {
    milliSec: 0,
    inputTime: 0,
    stating: false
  }

  handleInput = (num) => {
    num = parseInt(num);

    if(num && typeof num === 'number') {
      if(num <= 359999) {
        this.setState({
          milliSec: num * 1000,
          inputTime: num,
        })
      }else {
        this.setState({
          milliSec: 0,
          inputTime: ''
        })
      }
    }
  }

  handleStart = (state) => {
    console.log(state);
    console.log(this.state.stating);
    if( !state ){
      this.countDown = setInterval( () => {
        if( this.state.inputTime !== 0 ) {
          this.setState( prevState => ({
            inputTime: prevState.inputTime - 10
          }))
        }else {
          this.setState({
            milliSec: 0,
            inputTime: 0,
            stating: false
          })
          clearInterval(this.countDown);
        }
      }, 10);
      this.setState( prevState => ({
        stating: !prevState.stating
      }))
    }
  }

  handleStop = (state) => {
    this.setState({
      stating: !state
    });
    clearInterval(this.countDown);
  }

  render() {
    const { milliSec, inputTime, stating } = this.state;
    return (
      <article>
        <TimeSet />
        <TimeWrap
          milliSec={milliSec}
          inputTime={inputTime}
          getTime={this.handleInput}
         />
        <InputBox
          onInput={this.handleInput}
        />
        <Buttons
          onStart={this.handleStart}
          onStop={this.handleStop}
          state={stating}
          inputTime={inputTime}
        />
      </article>
    );
  }
}

export default ComponentWrap;