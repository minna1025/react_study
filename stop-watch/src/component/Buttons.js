import React, { Component } from 'react';

class Buttons extends Component {
  state = {
    state: false
  }
  
  timerStart = () => {
    const { state } = this.state;
    const { onStart, stating, inputTime } = this.props;

    if(inputTime === undefined) {
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
    const { stating } = this.state;
    const { onStop } = this.props;
    this.setState({
      stating: !stating
    });
    onStop(stating);
  }

  timerReset = () => {}

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