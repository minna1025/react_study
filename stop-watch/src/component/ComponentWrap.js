import React, { Component } from 'react';
import TimeSet from '../TimeSet';
import TimeWrap from './TimeWrap';
import InputBox from './InputBox';
import Buttons from './Buttons';

class ComponentWrap extends Component {

  state = {
    sec: 0,
    inputTime: 0,
    stating: false
  }

  handleInput = (num) => {
    num = parseInt(num);

    if(num && typeof num === 'number') {
      if(num <= 359999) {
        this.setState({
          sec: num,
          inputTime: num * 1000,
        })
      }else {
        alert('plz input time under 100H');
        this.setState({
          sec: 0,
          inputTime: ''
        })
        document.getElementById('inputTime').value="";
        return false;
      }
    }
  }

  handleStart = (state) => {
    this.setState( prevState => ({
      stating: !this.state.stating
    }));

    if( !this.state.stating ){
      this.countDown = setInterval( () => {
        if( this.state.inputTime !== 0 ) {
          this.setState( prevState => ({
            inputTime: prevState.inputTime - 10
          }))
        }else {
          this.setState({
            sec: 0,
            inputTime: 0,
            stating: false
          })
          clearInterval(this.countDown);
        }
      }, 10);
    }
  }

  handleStop = (state) => {
    if( this.state.stating ) {
      clearInterval(this.countDown);
      this.setState( prevState => ({
        stating: !state,
        sec: Math.floor(prevState.inputTime/1000)
      }));
    }
  }

  handleReset = () => {
    clearInterval(this.countDown);
    this.setState({
      sec: 0,
      inputTime: 0,
      stating: false
    });
    document.getElementById('inputTime').value="";
  }

  render() {
    const { sec, inputTime, stating } = this.state;
    return (
      <article>
        <TimeSet />
        <h2>----------------- <br/>아래부턴 컴포넌트가<br/> 분리되어있넹 <br/>-----------------</h2>
        <TimeWrap
          sec={sec}
          inputTime={inputTime}
          getTime={this.handleInput}
         />
        <InputBox
          onInput={this.handleInput}
          sec={sec}
          inputTime={inputTime}
        />
        <Buttons
          onStart={this.handleStart}
          onStop={this.handleStop}
          onReset={this.handleReset}
          stating={stating}
          inputTime={inputTime}
        />
      </article>
    );
  }
}

export default ComponentWrap;