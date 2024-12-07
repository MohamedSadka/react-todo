/* eslint-disable */

import { Component } from "react";
import TodoForm from "./TodoForm";
import Todo from "./Todo";

class TodoCls extends Component {
  constructor(props) {
    super(props);
    this.state = {
      todos: [],
      filter: "all",
      toggleAllTodos: true,
    };
  }

  componentDidMount() {
    const savedTodos = JSON.parse(localStorage.getItem("todos"));
    if (savedTodos) {
      this.setState({ todos: savedTodos });
    }
  }

  componentDidUpdate(prevProps, prevState) {
    if (prevState.todos !== this.state.todos) {
      localStorage.setItem("todos", JSON.stringify(this.state.todos));
    }
  }

  addTodo = (todo) => {
    this.setState((prevState) => ({
      todos: [...prevState.todos, todo],
    }));
  };

  deleteTodo = (id) => {
    this.setState((prevState) => ({
      todos: prevState.todos.filter((todo) => todo.id !== id),
    }));
  };

  toggleComplete = (id) => {
    this.setState((prevState) => ({
      todos: prevState.todos.map((todo) =>
        todo.id === id ? { ...todo, complete: !todo.complete } : todo
      ),
    }));
  };

  setFilter = (filter) => {
    this.setState({ filter });
  };

  deleteAllCompleteTodos = () => {
    this.setState((prevState) => ({
      todos: prevState.todos.filter((todo) => !todo.complete),
    }));
  };

  handleToggleAllTodos = () => {
    this.setState((prevState) => ({
      todos: prevState.todos.map((todo) => ({
        ...todo,
        complete: prevState.toggleAllTodos,
      })),
      toggleAllTodos: !prevState.toggleAllTodos,
    }));
  };

  render() {
    const { todos, filter } = this.state;

    const filteredTodos = todos.filter((todo) => {
      if (filter === "all") return true;
      if (filter === "active") return !todo.complete;
      if (filter === "complete") return todo.complete;
      return false;
    });

    return (
      <div className="container">
        <TodoForm addTodo={this.addTodo} />

        {filteredTodos.map((todo) => (
          <Todo
            key={todo.id}
            todo={todo}
            deleteTodo={this.deleteTodo}
            toggleComplete={() => this.toggleComplete(todo.id)}
          />
        ))}

        <div>
          <button
            className="update-btn btn"
            onClick={() => this.setFilter("all")}
          >
            All
          </button>
          <button
            className="update-btn btn"
            onClick={() => this.setFilter("active")}
          >
            Active
          </button>
          <button
            className="update-btn btn"
            onClick={() => this.setFilter("complete")}
          >
            Complete
          </button>
        </div>
        {todos.some((todo) => todo.complete) ? (
          <button className="all-btn btn" onClick={this.deleteAllCompleteTodos}>
            Delete All Complete Todos
          </button>
        ) : null}
        <button className="all-btn btn" onClick={this.handleToggleAllTodos}>
          Toggle All Todos: {this.state.toggleAllTodos.toString()}
        </button>
      </div>
    );
  }
}

export default TodoCls;
