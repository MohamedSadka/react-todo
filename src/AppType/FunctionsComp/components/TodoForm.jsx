// /* eslint-disable */

import { useContext, useState } from "react";
import shortid from "shortid";
import { TodoContext } from "../../TodoContext";

const TodoForm = () => {
  const [text, setText] = useState("");
  const {addTodo} = useContext(TodoContext);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (text.trim() === "") {
      return ;
    }
    addTodo({
      id: shortid.generate(),
      text: text,
      complete: false
    });
    setText("");
  };
  
  return (
    <form onSubmit={handleSubmit}>
      <input
        className="input-field"
        type="text"
        onChange={(e) => setText(e.target.value)}
        value={text}
      />
      <button className="btn" type="submit">
        Add Todo
      </button>
    </form>
  );
};

export default TodoForm;
