import React, { Component, Fragment } from 'react';
import Header from './Header';
import Contents from './Contents';
import './stopWatch.css';

class App extends Component {
  render() {
    return (
      <Fragment>
        <Header />
        <Contents />
      </Fragment>
    );
  }
}

export default App;
