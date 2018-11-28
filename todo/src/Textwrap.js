import React, { Component } from 'react';

class Textwrap extends Component {

  state = {
    doSomething: '',
    state: false
  }

  handleChange = (e) => {
    this.setState({
      doSomething: e.target.value
    });
  }

  handleSubmit = (e) => {
    e.preventDefault();
    const textBox = document.getElementById('textBox');
    if( textBox.value === '' || textBox.value === undefined ){
      alert('뭐라도 좀 쓰시지?!');
      return false;
    }

    this.props.onCreate(this.state);
    this.setState({
      doSomething: '',
      state: false
    });
  }

  render() {
    return (
      <form onSubmit={this.handleSubmit}>
        <input 
          id="textBox"
          type="text"
          placeholder="What will U do?"
          onChange={this.handleChange}
          value={this.state.doSomething} />
        <button id="btn_add" type="submit">ADD</button>
      </form>
    );
  }
}

export default Textwrap;