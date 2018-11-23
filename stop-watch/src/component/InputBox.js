import React, { Component } from 'react';

class InputBox extends Component {
  handleInput = (e) => {
    if ( isNaN(e.target.value) ){
      alert('plz input numer only');
      e.target.value = '';
      return false;
    }
    const { onInput } = this.props;
    onInput(e.target.value);
  }

  render() {
    const { inputTime } = this.props;
    return (
      <div>
        <input 
          type="text"
          value={inputTime}
          onChange={this.handleInput}
        />
      </div>
    )
  }
}

export default InputBox;