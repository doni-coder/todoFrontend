import React from "react";
import "../styles/AddTasks.css";

function AddTasks() {
  return (
    <div className="form-container">
      <h2>Add Task</h2>
      <div className="form-content">
        <form action="/add-task" method="post">
          <div className="title">
            <span>Title</span>
            <input name="title" type="text" />
          </div>
          <div className="description">
            <span>content</span>
            <input name="description" type="text" />
          </div>
          <button className="btn" type="submit">
            Add
          </button>
        </form>
      </div>
    </div>
  );
}

export default AddTasks;
