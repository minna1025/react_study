import React, { Component } from 'react';

class Buttons extends Component {
  state = {
    stating: false
  }
  
  timerStart = () => {
    const { stating } = this.state;
    const { onStart, state } = this.props;

    if( !state ) {
      this.setState({
        stating: !stating
      });
      onStart(stating);
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
          this.state.stating === false
            ? (<button className="start" onClick={this.timerStart}>start</button>)
            : (<button className="stop" onClick={this.timerStop}>stop</button>)
        }
        <button className="reset" onClick={this.timerReset}>reset</button>
      </div>
    );
  }
}

export default Buttons;