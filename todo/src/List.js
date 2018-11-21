import React, { Component } from 'react';
import Todo from './Todo';

class List extends Component {

  static defaultProps = {
    data: [],
    onComplete: () => console.warn('onComplete not definde'),
  }

  constructor(props) {
    super(props);
    this.state = {
      showList: this.props.data,
    }
  }

  filterShow = (whatToShow) => {
    this.setState({
      showWhat: whatToShow
    });
    this.props.onFilter(whatToShow);
  }

  render() {
    const { onRemove, onComplete, onEdit } = this.props;
    const data = this.props.listItem;
    
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

    return (
      <div className="todoList_wrap">
        { list }
      </div>
    );
  }
}

export default List;