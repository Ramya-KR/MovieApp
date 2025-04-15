import React from "react";
import Todo from "./Todo";

function TodoListComponent({ toDos, removeTask }) {
  return (
    <div className="container">
      {toDos.map((todo, index) => {
        return <Todo key={index} index={index} todo={todo} removeTask={removeTask} />;
      })}
    </div>
  );
}

export default TodoListComponent;
