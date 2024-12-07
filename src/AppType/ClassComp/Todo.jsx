/* eslint-disable */

import { Component } from "react";

class Todo extends Component {

  handleDeleteTodo = () => {
    this.props.deleteTodo(this.props.todo.id);
  }

  handleToggleComplete = () => {
    this.props.toggleComplete();
  }

  render() {
    const {text , complete} = this.props.todo;
    return (
      <div className="todo">
        <div style={{textDecoration : complete ? "line-through": ""}} onClick={this.handleToggleComplete}>{text}</div>
        <button className="delete-btn btn" onClick={this.handleDeleteTodo}>x</button>
      </div>
    )
  }
}

export default Todo;