import React, { Component } from 'react';

class Buttons extends Component {
  state = {
    state: false
  }
  
  timerStart = () => {
    const { state } = this.state;
    const { onStart, stating, inputTime } = this.props;

    if(inputTime === 0) {
      alert('Did U RIGTH write down the time?!');
      return false;
    }

    if( !stating ) {
      this.setState({
        state: !state
      });
      onStart(state);
    }
  }

  timerStop = () => {
    const { state } = this.state;
    const { onStop, stating } = this.props;
    if( stating ) {
      this.setState({
        state: !state
      });
      onStop(state);
    }
  }

  timerReset = () => {
    const { onReset } = this.props;
    this.setState({
      state: false
    });
    onReset();
  }

  render() {
    return (
      <div className="btn-row">
        {
          this.state.state === false
            ? (<button className="start" onClick={this.timerStart}>start</button>)
            : (<button className="stop" onClick={this.timerStop}>stop</button>)
        }
        <button className="reset" onClick={this.timerReset}>reset</button>
      </div>
    );
  }
}

export default Buttons;