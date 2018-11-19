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
      showWhat: this.showWhat
    }
    
    this.complete = this.props.data.filter( todo => todo.state === false );
    this.doit = this.props.data.filter( todo => todo.state === true );
  }

  filterShow = (whatToShow) => {
    this.setState({
      showWhat: whatToShow
    });
    console.log('this.state.showWhat : ', this.state.showWhat);
    console.log('before: ', this.props.showWhat);
    this.props.onFilter(this.state.showWhat);
    console.log('after : ', this.state.showWhat);
  }

  render() {
    const { data, onRemove, onComplete, onFilter, showWhat } = this.props;
    this.showWhat = this.state.showWhat;
    const list = data.map(
      todo => (
        <Todo 
          key={todo.id}
          todo={todo} 
          onRemove={onRemove}
          onComplete={onComplete}
          onFilter={onFilter} />
      )
    );

    const listAll = list;
    const listComplete = this.complete;
    const listdoit = this.doit;
    console.log('showWhat : ', showWhat);

    return (
      <Fragment>
        <div className="todoList_wrap">
          {
            (function() {
              if(showWhat === 'all') return (<div>{listAll}</div>);
              if(showWhat === 'complete') return (<div>{listComplete}</div>);
              if(showWhat === 'doit') return (<div>{listdoit}</div>);
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