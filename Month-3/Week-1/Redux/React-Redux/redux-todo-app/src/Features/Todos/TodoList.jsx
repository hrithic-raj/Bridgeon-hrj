import React, { useState } from 'react'
import { useDispatch, useSelector} from 'react-redux'
import { deleteTask, editTask } from './TodoSlice'

function TodoList() {
    const tasks = useSelector(state=>state.todos.tasks)
    const dispatch = useDispatch();
    const [editId,setEditId]=useState(null)
    const [editTitle,setEditTitle]=useState('')
    
    const handleDelete=(id)=>{
        dispatch(deleteTask(id))
    }

    const handleEdit=(task)=>{
        setEditId(task.id)
        setEditTitle(task.title)
    }

    const handleSave=(id)=>{
        if(editTitle.trim()!==''){
            dispatch(editTask({id,title:editTitle}));
            setEditId(null);
        }
    }
  return (
    <div>
        <ul>
            {tasks.map(task=>(
                <li key={task.id}>
                    {editId?(
                        <div>
                            <input
                            style={{width:'200px', border:'none', backgroundColor:'tomato', color:'white'}}
                            type="text"
                            value={editTitle}
                            onChange={(e) => setEditTitle(e.target.value)}
                            />
                            <button onClick={() => handleSave(task.id)}>Save</button>
                        </div>
                    ):(
                        <div>
                            <input
                            style={{width:'200px', border:'none', backgroundColor:'tomato', color:'white'}}
                            type="text"
                            value={task.title}
                            disabled
                            />
                            <button onClick={() => handleEdit(task)}>Edit</button>
                            <button onClick={() => handleDelete(task.id)}>Delete</button>
                        </div>
                    )}
                </li>
            ))}

        </ul>
    </div>
  )
}

export default TodoList