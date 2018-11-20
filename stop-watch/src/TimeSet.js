import React, { Component, Fragment } from 'react';

class TimeSet extends Component {
  constructor(props) {
    super(props);
    this.state = {
      hour: 0,
      min: 0,
      sec: 0,
      milliSec: 0,
      inputTime: '',
      stating: false  // 정지상태
    }
    this.baseState = this.state;
  }

  // 인풋값의 숫자를 타이머에 셋팅
  timeChange = (e) => {
    let val = Math.floor(e.target.value);
    let _sec = val % 60;
    let _min = val / 60;

    this.setState({
      inputTime: val,
      sec: Math.floor(_sec),
      min: Math.floor(_min % 60),
      hour: Math.floor(_min / 60),
    });
  }

  // 스타트 버튼 이벤트
  timerStart = (e) => {
    e.preventDefault();

    if( !this.state.stating && this.state.inputTime !== '' ) {
      let time = document.getElementById('time').value;
      let _milliSec = 99, _sec, _min, _hour;

      this.countDown = setInterval(() => {  // 0.001초 마다 실행되게 셋팅
        time = Math.floor(time);

        _milliSec--;  // 밀리세컨드 카운트다운 실행
        _sec = time;  // 입력받은 시간을 초에 입력
        _min = Math.floor(_sec / 60); // 입력받은 시간(_sec)을 분으로 계산
        _sec = _sec % 60; // 상단에서 분 입력이 끝났으므로 계산 후 남은 초를 입력
        _min = _min % 60;
        _hour = Math.floor(_min / 60);  // 분이 60분을 넘은 경우 시간으로 입력
        _hour = _hour % 24;
        _sec--; // 중지 후 재실행 시 필요

        if( _sec === -1 ) {
          _sec = 59;
          if( _min !== 0 ) {
            _min--;
          }
          if( _hour !== 0 ) {
            _hour--;
          }
        }

        if ( _milliSec < 0 ) {
          _milliSec = 99
          time--;

          if ( _sec < 1 && time < 1) {
            time = 0;
            _milliSec = 0;
            this.setState({
              stating: false
            });
            clearInterval(this.countDown);
            this.setState(this.baseState);  // 값 초기화
            document.getElementById('time').classList.remove('hide');
            document.getElementById('time_wrap').classList.remove('red');
          }
        }else {
          this.setState({
            milliSec: _milliSec,
            sec: _sec,
            min: _min,
            hour: _hour,
            inputTime: time,
            stating: true
          });
        }
      },10);
    }
  }

  timerStop = (e) => {
    if( this.state.stating ) {
      clearInterval(this.countDown);

      this.setState ({
        stating: false
      });

      document.getElementById('time').classList.remove('hide');
      document.getElementById('time_wrap').classList.remove('red');
    }
  }

  timerReset = () => {
    if( this.state.stating ){
      clearInterval(this.countDown);
    }
    this.setState(this.baseState);

    document.getElementById('time').classList.remove('hide');
    document.getElementById('time_wrap').classList.remove('red');
  }

  render() {
    if( this.state.stating ) {
      document.getElementById('time').classList.add('hide');
      document.getElementById('time_wrap').classList.add('red');
    }
    return (
      <Fragment>
        <div className="time-wrap" id='time_wrap'>
          <span id="hour">
            {
              this.state.hour < 10 ?
              '0' + this.state.hour : this.state.hour
            } 
          </span>
          : 
          <span id="min">
            {
              this.state.min < 10 ?
              '0' + this.state.min : this.state.min
            } 
          </span> 
          :
          <span id="sec">
            {
              this.state.sec < 10 ?
              '0' + this.state.sec : this.state.sec
            } 
          </span>
          : 
          <span id="milliSec">
            {
              this.state.milliSec < 10 ?
              '0' + this.state.milliSec : this.state.milliSec
            }
          </span>
        </div>
        <div className="input-row">
          <input type="text" id="time" value={this.state.inputTime} placeholder='0' onChange={this.timeChange} />
        </div>
        <div className="btn-row">
          {
            this.state.stating === false
              ? (<button className="start" onClick={this.timerStart}>start</button>)
              : (<button className="stop" onClick={this.timerStop}>stop</button>)
          }
          <button className="reset" onClick={this.timerReset}>reset</button>
        </div>
      </Fragment>
    );
  }
}

export default TimeSet;