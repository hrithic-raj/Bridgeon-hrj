import React, { useState,useEffect } from 'react'
import { getPost, createPost, deletePost} from './api'
import { Button } from 'react-bootstrap';
// import ThemeContext from './ThemeContext';

function FetchDB(){
    const [posts,setPosts]=useState([]);
    const [newTitle,setNewTitle]=useState('');
    const [newAuthor,setNewAuthor]=useState('');
    useEffect(()=>{
        getPost()
        .then(res=>setPosts(res.data))
        .catch(err=>console.error(err))
    }) 
    const handleAdd=()=>{
        if(newTitle.trim() && newAuthor.trim()){
            createPost({title : newTitle, author : newAuthor})
            .then(res=>setPosts([...posts,res.data]))
            .catch(err=>console.error(err))
        }
        setNewAuthor('')
        setNewTitle('')
    }
    const handleDelete=(id)=>{
        deletePost(id)
        .then(res=>setPosts(posts.filter(post=>post.id!==id)))
        .catch(err=>console.error(err))
    }
    // const {bgColor}=useContext(ThemeContext);
  return (
    <div className='fetch-a'>
        <h1 style={{color:"black", textAlign:"center"}}>JSON Server</h1>
        <div className='wbox addgrid'>
            <input className='hrjinput_l' type='text' value={newTitle} onChange={(e)=>setNewTitle(e.target.value)} placeholder='Add new title'/>
            <input className='hrjinput_l' type='text' value={newAuthor} onChange={(e)=>setNewAuthor(e.target.value)} placeholder='Add new author'/>
            <button className='hrjbtn_l' onClick={handleAdd}>Add</button>
        </div>
        <br />
        <ul className='wbox'>
            {posts.map(post=>(
                <li key={post.id}>
                    {post.title} by {post.author} 
                    <Button variant='danger' onClick={()=>handleDelete(post.id)}>Delete</Button>
                </li>
            ))}
        </ul>
    </div>
  )
}
export default FetchDB