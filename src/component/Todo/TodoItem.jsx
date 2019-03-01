import React from "react";

export default class TodoItem extends React.Component {
  getStyle = () => {
    return {
      textDecoration: this.props.todo.completed ? "line-through" : "none",
      color: this.props.todo.completed ? "gray" : "red"
    };
  };

  render() {
    const { todo, store } = this.props;
    return (
      <div>
        <li
          // className="todoItem"
          key={todo.id}
          style={this.getStyle()}
        >
          <button onClick={() => store.deleteAction(todo)}>Delete</button>
          <button onClick={() => store.setEditModeAction(todo)}>Edit</button>
          <input
            type="checkbox"
            checked={todo.completed}
            onChange={() => {
              store.completeAction(todo);
            }}
          />
          {todo.title}
        </li>
        {/* <hr /> */}
      </div>
    );
  }
}
