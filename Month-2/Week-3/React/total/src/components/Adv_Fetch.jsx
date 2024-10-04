import React, { useState,useEffect } from 'react'
import { getPost, createPost, deletePost, updatePost} from './api'
import { Button } from 'react-bootstrap';
// import ThemeContext from './ThemeContext';

function Adv_Fetch(){
    const [posts,setPosts]=useState([]);
    const [newTitle,setNewTitle]=useState('');
    const [newAuthor,setNewAuthor]=useState('');
    const [editId,setEditId]=useState(null);
    const [editTitle,setEditTitle]=useState('');
    const [editAuthor,setEditAuthor]=useState('');

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

    const handleEdit=(post)=>{
        setEditId(post.id);
        setEditTitle(post.title);
        setEditAuthor(post.author);
    }

    const handleSave=()=>{
        const updatedPost = {title: editTitle, author: editAuthor}
        if(editTitle.trim() && editAuthor.trim()){
            updatePost( editId, updatedPost)
            .then(res=>{
                setPosts(posts.map(post=>(post.id===editId ? res.data : post)));
                setEditId(null);
                setEditTitle('');
                setEditAuthor('');
            })
            .catch(err=>console.error("error occurs when updating",err));
        }
    };
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
                    {editId===post.id ?(
                        <>
                            <div>
                                <input className='hrjinput_s' type='text' value={editTitle} onChange={(e)=>setEditTitle(e.target.value)} placeholder='Edit title'/>
                                <input className='hrjinput_s' type='text' value={editAuthor} onChange={(e)=>setEditAuthor(e.target.value)} placeholder='Edit Author'/>
                            </div>
                            <div className='hrjbtns'>
                                <Button variant='success' onClick={handleSave}>Save</Button>
                                <Button variant='secondary' onClick={()=>setEditId(null)}>Cancel</Button>
                            </div>
                            
                            
                        </>
                    ):(
                      <>
                            {post.title} by {post.author}
                            <div className='hrjbtns'>
                                <Button variant='primary' onClick={()=>handleEdit(post)}>Edit</Button>
                                <Button variant='danger' onClick={()=>handleDelete(post.id)}>Delete</Button>
                            </div>
                            
                    </>  
                    )}
                </li>
            ))}
        </ul>
    </div>
  )
}
export default Adv_Fetch;