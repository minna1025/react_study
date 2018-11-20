import React, { Component, Fragment } from 'react';
import Todo from './Todo';
import Filter from './Filter';

class List extends Component {

  static defaultProps = {
    showWhat: 'all',
    data: [],
    onRemove: () => console.warn('onRemove not defined'),
    onComplete: () => console.warn('onComplete not definde'),
    onFilter: () => console.warn('onFilter not definde')
  }

  constructor(props) {
    super(props);
    this.state = {
      showList: this.props.data,
      showWhat: 'all'
    }
    
    this.complete = this.props.data.filter( todo => todo.state === true );
    this.doit = this.props.data.filter( todo => todo.state === false );
  }

  filterShow = (whatToShow) => {
    this.setState({
      showWhat: whatToShow
    });
    this.props.onFilter(whatToShow);
  }

  render() {
    const { data, onRemove, onComplete, onFilter, showWhat, onEdit, onCreate } = this.props;
    const { abotFilter } = this.state.showWhat;
    const list = data.map(
      todo => (
        <Todo 
          key={todo.id}
          todo={todo} 
          onRemove={onRemove}
          onComplete={onComplete}
          onEdit={onEdit} />
      )
    );

    const filter = this.state.showWhat;
    const listAll = list;
    const listdoit = this.doit.map(
      todo => (
        <Todo
          key={todo.id}
          todo={todo} 
          onRemove={onRemove}
          onComplete={onComplete}
          onEdit={onEdit} />
      )
    );
    const listComplete = this.complete.map(
      todo => (
        <Todo
          key={todo.id}
          todo={todo} 
          onRemove={onRemove}
          onComplete={onComplete}
          onEdit={onEdit} />
      )
    );

    return (
      <Fragment>
        <div className="todoList_wrap">
          {
            // listAll
            (function() {
              if(filter === 'all') return (<div>{listAll}</div>);
              if(filter === 'complete') return (<div>{listComplete}</div>);
              if(filter === 'doit') return (<div>{listdoit}</div>);
            })()
          }
        </div>
        <Filter
          onFilter={this.filterShow} />
      </Fragment>
    );
  }
}

export default List;