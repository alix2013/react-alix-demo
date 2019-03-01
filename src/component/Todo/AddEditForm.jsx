import React from "react";
const form = props => {
  return (
    <div>
      <form
        style={{ margin: "10px auto 10px 40px" }}
        onSubmit={e => props.onSubmit(e)}
      >
        <input
          className="todoInput"
          type="text"
          name="newinput"
          onChange={props.onChange}
          value={props.value}
        />
        <input
          class="todoButton"
          type="submit"
          value={props.store.isEditMode ? "Update" : "Add"}
        />
      </form>
    </div>
  );
};
export default form;
