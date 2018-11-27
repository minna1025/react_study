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
    const { sec } = this.props;
    return (
      <div>
        <input 
          id="inputTime"
          type="text"
          value={sec}
          onChange={this.handleInput}
          placeholder='0'
        />
      </div>
    )
  }
}

export default InputBox;