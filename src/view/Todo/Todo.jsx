import React from "react";
import { BaseComponent } from "react-alix";
import AddEditForm from "../../component/Todo/AddEditForm";
import TodoList from "../../component/Todo/TodoList";

class Todo extends BaseComponent {
  store = this.props.store.todoStore;

  componentDidMount = () => {
    super.componentDidMount();
    this.dispatch(this.store, "queryDataActionV2", 1);
  };

  render() {
    this.debug("render called:", this.store, this.store.isLoading);

    const title = (
      <h2 className="title">Todo List Demo(View-ViewModel-Service-Network)</h2>
    );

    const todoList = (
      <div>
        <AddEditForm
          value={this.store.newInputValue}
          onChange={this.onChange}
          onSubmit={e => this.onSubmit(e)}
          store={this.store}
        />
        <TodoList
          store={this.store}
          list={this.store.dataList}
          onDelete={x => this.dispatch(this.store, "deleteAction", x)}
        />
        {this.store.dataList.length !== 0 && (
          <div className="todoBottomButton">
            <button
              type="button"
              onClick={() => this.dispatch(this.store, "prePageAction")}
            >
              Previous
            </button>
            {this.store.currentPage}
            <button
              type="button"
              onClick={() => this.dispatch(this.store, "nextPageAction")}
            >
              Next
            </button>

            <div>{""}</div>
          </div>
        )}
      </div>
    );

    const errorLabel = (
      <p style={{ color: "red", margin: "20px" }}>{this.store.errorMessage}</p>
    );

    return (
      <div className="todoBox">
        {title}
        {this.store.isLoading ? "Loading" : todoList}
        {this.store.errorMessage != null && errorLabel}
      </div>
    );
  }

  componentWillUnmount = () => {
    super.componentWillUnmount();
    //other logic
  };

  onChange = e => {
    this.debug(e.target.value);
    this.dispatch(this.store, "setNewValue", e.target.value);
  };

  onSubmit(event) {
    event.preventDefault();
    if (this.store.isEditMode) {
      this.dispatch(this.store, "editAction");
    } else {
      this.dispatch(this.store, "addAction");
    }
  }
}

export default Todo;
