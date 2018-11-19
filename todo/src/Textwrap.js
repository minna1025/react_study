import React, { Component } from 'react';

class Textwrap extends Component {

  state = {
    doSomething: ''
  }

  handleChange = (e) => {
    this.setState({
      doSomething: e.target.value
    });
  }

  handleSubmit = (e) => {
    e.preventDefault();
    this.props.onCreate(this.state);
    this.setState({
      doSomething: ''
    });
  }

  render() {
    return (
      <form onSubmit={this.handleSubmit}>
        <input 
          type="text"
          placeholder="뭐할껀데?!?!?"
          onChange={this.handleChange}
          value={this.state.doSomething} />
        <button id="btn_add" type="submit">ADD</button>
      </form>
    );
  }
}

export default Textwrap;