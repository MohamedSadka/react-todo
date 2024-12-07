/* eslint-disable */

import { useContext } from "react";
import { TodoContext } from "../../TodoContext";

const Todo = ({ todo, toggleComplete}) => {
  const {deleteTodo } = useContext(TodoContext);
  return (
    <div className="todo">
      <div
        style={{ textDecoration: todo.complete ? "line-through": "" }}
      >
        {todo.text}
      </div>
      <div className="todo-details">
        <button className="delete-btn btn" onClick={toggleComplete}>✓</button>
      <button className="delete-btn btn" onClick={() => deleteTodo(todo.id)}>
        x
      </button>
      </div>
    </div>
  );
};

export default Todo;
