/* eslint-disable */

import { useEffect } from "react";
import { useState } from "react";
import { createContext } from "react";

export const TodoContext = createContext();

export const TodoProvider = ({ children }) => {
  let [todos, setTodos] = useState(() => {
    const savedTodos = localStorage.getItem("todos");
    return savedTodos ? JSON.parse(savedTodos) : [];
  });

  const [filter, setFilter] = useState("all");

  const [toggleAllTodos, setToggleAllTodos] = useState(true);

  useEffect(() => {
    localStorage.setItem("todos", JSON.stringify(todos));
  }, [todos]);

  const addTodo = (todo) => {
    setTodos([...todos, todo]);
  };

  const deleteTodo = (id) => {
    setTodos(todos.filter((todo) => todo.id !== id));
  };

  const toggleComplete = (id) => {
    setTodos((prevTodos) =>
      prevTodos.map((todo) =>
        todo.id === id ? { ...todo, complete: !todo.complete } : todo
      )
    );
  };

  const deleteAllCompleteTodos = () => {
    setTodos(todos.filter((todo) => !todo.complete));
  };

  const handleToggleAllTodos = () => {
    setTodos(
      todos.map((todo) => ({
        ...todo,
        complete: toggleAllTodos,
      }))
    );
    setToggleAllTodos(!toggleAllTodos);
  };

  if (filter === "active") {
    todos = todos.filter((todo) => !todo.complete);
  } else if (filter === "complete") {
    todos = todos.filter((todo) => todo.complete);
  }

  return (
    <TodoContext.Provider
      value={{
        todos,
        addTodo,
        deleteTodo,
        toggleComplete,
        deleteAllCompleteTodos,
        handleToggleAllTodos,
        filter,
        setFilter,
        toggleAllTodos,
      }}
    >
      {children}
    </TodoContext.Provider>
  );
};
