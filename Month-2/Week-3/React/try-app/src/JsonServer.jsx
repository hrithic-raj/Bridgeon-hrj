import React, { useEffect, useState } from 'react'
import { getPost , addPost ,delPost} from './api'
function JsonServer() {
    const [post,setPost]=useState([])
    const [newPost,setNewPost]=useState([])

    useEffect(()=>{
        getPost()
        .then(res=>setPost(res.data))
        .catch(err=>console.error(err))
    })
    const handleSub=()=>{
        addPost({name : newPost})
        .then(res=>console.log(res.data))
        .catch(err=>console.error(err))
        setNewPost('')
    }

    const handleDel=(id)=>{
        delPost(id)
        .then(res=>setPost(post.filter(post=>post.id!==id)))
        .catch(err=>console.error(err))
    } 
  return (
    <div>
        {JSON.stringify(post,null,2)} <br />
        <input type="text" value={newPost} onChange={(e)=>setNewPost(e.target.value)} placeholder='Name'/>
        <button type='submit' onClick={handleSub} >submit</button>

        <ul>
            {post.map(post=>(
                <li key={post.id}>
                    {post.name}
                    <button onClick={()=>handleDel(post.id)}>Delete</button>
                </li>
            ))}
        </ul>
    </div>
  )
}

export default JsonServer