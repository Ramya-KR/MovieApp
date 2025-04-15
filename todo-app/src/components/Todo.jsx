import React from "react";

function Todo({todo, removeTask, index}) {
  return (
    <div className="todo">
      <p>{todo}</p>
      <div className="actions">
        <input type="checkbox" />
        <button onClick={() => removeTask(index)}>Delete</button>
      </div>
    </div>
  );
}

export default Todo;
