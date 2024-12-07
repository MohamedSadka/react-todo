
import TodoForm from "./components/TodoForm";
import Todo from "./components/Todo";
import { useContext } from "react";
import { TodoContext } from "../TodoContext";

const TodoFC = () => {
  const {todos,
    addTodo,
    deleteAllCompleteTodos,
    handleToggleAllTodos,
    setFilter,
    toggleComplete,
    toggleAllTodos,} = useContext(TodoContext)

  return (
    <div className="container">
      <TodoForm addTodo={addTodo} />
      {todos.map((todo) => (
        <Todo
          key={todo.id}
          todo={todo}
          toggleComplete = {() => toggleComplete(todo.id)}
        />
      ))}
      <div className="update-btn-container">
        <button
          className="update-btn btn"
          onClick={() => setFilter("all")}
        >
          All
        </button>
        <button
          className="update-btn btn"
          onClick={() => setFilter("active")}
        >
          Active
        </button>
        <button
          className="update-btn btn"
          onClick={() => setFilter("complete")}
        >
          Complete
        </button>
      </div>
      {todos.some((todo) => todo.complete) ? (
        <button className="all-btn btn" onClick={deleteAllCompleteTodos}>
          Delete all complete todos
        </button>
      ) : null}
      <button className="all-btn btn" onClick={handleToggleAllTodos}>Toggle all todos: {`${toggleAllTodos}`}</button>
    </div>
  );
};

export default TodoFC;
