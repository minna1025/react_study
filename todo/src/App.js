import React, { Component } from 'react';
import Header from './Header';
import Textwrap from './Textwrap';
import List from './List';
import Filter from './Filter';
import './App.css';

class App extends Component {
  id = 3;

  state = {
    showWhat: 'all',
    whatUdo: [
      {
        id:0,
        doSomething: 'test',
        state: false
      },
      {
        id:1,
        doSomething: 'complete test',
        state: true
      },
      {
        id:2,
        doSomething: 'list test',
        state: false
      }
    ]
  }

  handleCreate = (data) => {
    const { whatUdo } = this.state;
    this.setState({
      whatUdo: whatUdo.concat(Object.assign({}, data, {
        id:this.id++
      }))
    });
  }

  handleRemove = (id) => {
    const { whatUdo } = this.state;
    this.setState({
      whatUdo: whatUdo.filter( todo => todo.id !== id )
    });
  }

  handleComplete = (id,data) => {
    const { whatUdo } = this.state;
    this.setState({
      whatUdo: whatUdo.map(
        todo => todo.id === id
          ? {...todo, ...data}
          : todo
      )
    });
  }

  handleEdit = (id,data) => {
    const { whatUdo } = this.state;
    this.setState({
      whatUdo: whatUdo.map(
        todo => todo.id === id
          ? {...todo, ...data}
          : todo
      )
    });
  }  

  filterShow = (whatToShow) => {
    this.setState({
      showWhat: whatToShow
    });
  }

  render() {

    const list = this.state.whatUdo;
    const showWhat = this.state.showWhat;
    const complete = list.filter( todo => todo.state === true );
    const doit = list.filter( todo => todo.state === false );

    return (
      <div className="App">
        <Header name="TO DO" />
        <Textwrap
          onCreate={this.handleCreate} />
        <List 
          data={this.state.whatUdo}
          onRemove={this.handleRemove}
          onComplete={this.handleComplete}
          onEdit={this.handleEdit}
          listItem={
            (function() {
              if( showWhat === 'all' ) return (list);
              if( showWhat === 'doit' ) return (doit);
              if( showWhat === 'complete' ) return (complete);
            })()
          } />
        <Filter
          onFilter={this.filterShow}
          active={this.state.showWhat} />
      </div>
    );
  }
}

export default App;
