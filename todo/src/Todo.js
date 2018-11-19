import React, { Component, Fragment } from 'react';

class Todo extends Component {
  static defaultProps = {
    todo: {
      name: '뭐할건뎅?',
      id: 0,
      state: false
    }
  }

  handleRemove = () => {
    const { todo, onRemove } = this.props;
    onRemove(todo.id);
  }

  handleComplete = () => {
    this.props.todo.state = !this.props.todo.state;
    const { todo, onComplete } = this.props;
    onComplete( this.props.todo.id, this.props.todo );
  }

  render() {
    const {
      id, doSomething, state
    } = this.props.todo;

    return (
      <Fragment>
        <div className={ this.props.todo.state ? 'todo_item complete' : 'todo_item'} onClick={this.handleComplete}>
          <div></div>
          {doSomething}
        </div>
        <div onClick={this.handleRemove} className="trash"></div>
      </Fragment>
    );
  }
}

export default Todo;