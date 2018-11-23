import React, { Component, Fragment } from 'react';
import Header from './Header';
import ComponentWrap from './component/ComponentWrap';
import './stopWatch.css';

class App extends Component {
  render() {
    return (
      <Fragment>
        <Header />
        <ComponentWrap />
      </Fragment>
    );
  }
}

export default App;
