import React from "react";
import "./App.css";
import InputComponent from "./components/inputComponent";
import TodoListComponent from "./components/TodoListComponent";
import { useState } from "react";
function App() {
  const [task, setTask] = useState("");
  const [toDos, setToDos] = useState([]);

  function addToDo() {
    if (task != "") {
      setToDos((prevToDos) => [...prevToDos, task]);
      setTask("");
    }
  }

  function writeTask(e) {
    setTask(e.target.value);
  }

  function removeTask(taskIndex) {
    setToDos((prevToDos) =>
      prevToDos.filter((prevToDos, prevToDosIndex) => {
        return prevToDosIndex != taskIndex;
      })
    );
  }

  return (
    <main>
      <h1>TO-DO List</h1>
      <InputComponent task={task} writeTask={writeTask} addToDo={addToDo} />
      <TodoListComponent toDos={toDos} removeTask={removeTask} />
    </main>
  );
}

export default App;
