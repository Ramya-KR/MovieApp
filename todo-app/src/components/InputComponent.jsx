import React from 'react'

function InputComponent({task, writeTask, addToDo}) {
  return (
    <div className="input-container">
        <input type="text" placeholder="Enter a Task" onChange={writeTask} value={task}/>
        <button onClick={addToDo}>+</button>
      </div>
  )
}

export default InputComponent