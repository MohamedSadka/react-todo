/* eslint-disable */

import { Component } from "react";
import shortid from "shortid";

class TodoForm extends Component {
  constructor(props) {
    super(props);
    this.state = {
      text: "",
    };
  }

  handleChange = (e) => {
    this.setState({ text: e.target.value });
  };

  handleSubmit = (e) => {
    e.preventDefault();

    if(!this.state.text.trim()) {
      return;
    }

    this.props.addTodo({
      id: shortid.generate(),
      text: this.state.text,
      complete: false,
    });

    this.setState({
      text: "",
    });
  };

  render() {
    return (
      <form onSubmit={this.handleSubmit}>
        <input
          type="text"
          className="input-field"
          onChange={this.handleChange}
          value={this.state.text}
        />
        <button className="btn" onClick={this.handleSubmit}>
          Add Todo
        </button>
      </form>
    );
  }
}

export default TodoForm;
