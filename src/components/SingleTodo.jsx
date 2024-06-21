import React from "react";
import "../styles/SingleTodo.css";

function SingleTodo() {
  return (
    <div className="single-todo-box">
      <div className="singleTodo-container">
        <h3>Update Todo</h3>
        <form>
          <div className="title">
            <label htmlFor="title">Title:</label>
            <input name="title" type="text" />
          </div>
          <div className="description">
            <label htmlFor="description">Description:</label>
            <input name="description" type="text" />
          </div>
          <div className="checkbox">
            <label htmlFor="isCompleted">Completed:</label>
            <input name="isCompleted" type="checkbox" />
          </div>
          <button className="save-btn">Save</button>
          <button className="delete-btn">Delete</button>
        </form>
        <div className="cancel"><span>X</span></div>
      </div>
    </div>
  );
}

export default SingleTodo;
