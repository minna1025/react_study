import React, { Component, Fragment } from 'react';

class Todo extends Component {
  static defaultProps = {
    todo: {
      name: '뭐할건뎅?',
      id: 0,
      state: false
    }
  }

  constructor(props) {
    super(props);
    this.state = {
      edit: false,
      doSomething: '',
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

  handleChange = (e) => {
    this.setState({
      doSomething: e.target.value
    });
  }

  showEdit = () => {
    this.setState({
      edit: !this.state.edit
    });
  }

  handleEdit = (e) => {
    e.preventDefault();
    const { todo, onEdit } = this.props;
    this.setState({
      doSomething: '',
      edit: !this.state.edit
    });
    onEdit( this.props.todo.id, this.state );
  }

  render() {
    const {
      id, doSomething, state
    } = this.props.todo;

    return (
      <Fragment>
        <div className={ this.props.todo.state && !this.state.edit ? 'todo_item complete' : 'todo_item'} onClick={this.handleComplete}>
          {
            this.state.edit !== false 
            ? ( 
                <form onSubmit={this.handleEdit}>
                  <input 
                    type="text"
                    placeholder="뭐라고바꿀꼰데?!?!?"
                    onChange={this.handleChange}
                    value={this.state.doSomething} />
                  <button id="btn_add" type="submit">EDIT</button>
                </form>
              ) 
            : doSomething
          }
        </div>
        {
          !this.props.todo.state && <div onClick={this.showEdit} className="edit"></div>
        }
        <div onClick={this.handleRemove} className="trash"></div>
      </Fragment>
    );
  }
}

export default Todo;