import React from 'react'
import { useState } from 'react'
import {useDispatch} from 'react-redux'
import { addTodo } from '../todos/TodoSlice'

function TodoInput() {
    const [newTodo,setNewTodo]=useState('')
    const dispatch=useDispatch()
    const handleAdd=()=>{
        if(newTodo.trim()!==''){
            dispatch(addTodo(newTodo))
            setNewTodo('')
        }
    }
  return (
    <div style={{marginTop:'100px'}}>
        <input type="text" value={newTodo} onChange={(e)=>setNewTodo(e.target.value)}/>
        <button onClick={handleAdd}>Add</button>
    </div>
  )
}

export default TodoInput