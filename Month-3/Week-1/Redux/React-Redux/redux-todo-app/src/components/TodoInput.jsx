import React, { useState } from 'react'
import {useDispatch} from 'react-redux'
import { addTask } from '../Features/Todos/TodoSlice';


function TodoInput() {
    const [task,setTask]=useState('')
    const dispatch=useDispatch();
    const handleAddTask=()=>{
        if(task.trim()!==''){
            dispatch(addTask(task))
            setTask('')
        }
    }
  return (
    <div>
      <input
        type="text"
        value={task}
        onChange={(e) => setTask(e.target.value)}
        placeholder="Enter a task"
      />
      <button onClick={handleAddTask}>Add Task</button>
    </div>
  )
}

export default TodoInput