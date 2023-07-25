import React from "react";

export const TodoList = () => {
  return (
    <>
      <div className="home-container">
        <div className="home-todo-list">
          <h1 className="home-text">My Todo</h1>
          <span className="home-text1">Today Tasks</span>
          <button type="button" className="home-button button">
            Add
          </button>
          <input
            type="=text"
            placeholder="Add today task"
            className="home-text-input input"
          />
        </div>
        {/* <div className="home-todo-tasks">
          <h3>Gihan Pandula</h3>
        </div> */}
      </div>
    </>
  );
};
