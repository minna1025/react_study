import React, { Component } from 'react';

class Header extends Component {
  render() {
    return (
      <header>{this.props.name}</header>
    );
  }
}

export default Header;