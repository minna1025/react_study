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
    if ( !this.state.edit ){
      this.props.todo.state = !this.props.todo.state;
      const { onComplete } = this.props;
      onComplete( this.props.todo.id, this.props.todo );
    }
  }

  handleChange = (e) => {
    e.preventDefault();
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
    const { onEdit } = this.props;
    this.setState({
      doSomething: '',
      edit: !this.state.edit
    });
    onEdit( this.props.todo.id, this.state );
  }

  render() {
    const { doSomething } = this.props.todo;

    return (
      <Fragment>
        <div className={ this.props.todo.state && !this.state.edit ? 'todo_item complete' : 'todo_item'} onClick={this.handleComplete}>
          {
            this.state.edit !== false 
            ? ( 
                <form onSubmit={this.handleEdit}>
                  <input 
                    type="text"
                    placeholder="Show me what will U do?"
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