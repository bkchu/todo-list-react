import React, { Component } from "react";
import TodoItem from "./TodoItems";

import "../styles/TodoList.css";

class TodoList extends Component {
  constructor() {
    super();

    this.state = {
      current: "",
      todos: []
    };

    this.addTodoHandler = this.addTodoHandler.bind(this);
    this.deleteTodoHandler = this.deleteTodoHandler.bind(this);
  }

  addTodoHandler(e) {
    e.preventDefault();
    let todos = this.state.todos.slice();
    if (this.state.current !== "") {
      todos.push(this.state.current);
      this.setState({ current: "", todos });
    }
  }

  deleteTodoHandler(index) {
    let todos = this.state.todos.slice();
    todos.splice(index, 1);
    this.setState({ todos });
  }

  render() {
    return (
      <div className="TodoList">
        <form onSubmit={e => this.addTodoHandler(e)}>
          <input
            className="TodoList__input"
            type="text"
            placeholder="make full-stack react app"
            value={this.state.current}
            onChange={e => this.setState({ current: e.target.value })}
          />
          <button className="TodoList__button">Add Todo</button>
        </form>
        <div className="TodoList__container">
          {this.state.todos.map((todo, index) => {
            return (
              <TodoItem
                delete={this.deleteTodoHandler}
                key={index}
                text={todo}
                id={index}
              />
            );
          })}
        </div>
      </div>
    );
  }
}

export default TodoList;
