import React,{useState,useEffect} from 'react'
import { Button } from 'react-bootstrap';

function LocalStorage() {
  const [title,setTitle]=useState('');
  const [author,setAuthor]=useState('');
  const handleTitle=(e)=>{
    setTitle(e.target.value);
    localStorage.setItem("title",e.target.value) // Save data to local storage
  }
  const handleAuthor=(e)=>{
    setAuthor(e.target.value);
    localStorage.setItem("author",e.target.value) // Save data to local storage
  }
  useEffect(()=>{
    const titlevalue=localStorage.getItem("title"); // Retrieve data from local storage on component mount
    const authorvalue=localStorage.getItem("author"); // Retrieve data from local storage on component mount
    if(titlevalue || authorvalue){
      setTitle(titlevalue);
      setAuthor(authorvalue);
    }
  },[])
  const deleteTitle=()=>{
    localStorage.removeItem("title")
    setTitle('');
  }
  const deleteAuthor=()=>{
    localStorage.removeItem("author")
    setAuthor('');
  }
  const handleClear=()=>{
    localStorage.clear();
    setAuthor('');
    setTitle('');
  }

    return (
      <div className='local flex-1'>
        {/* <h3>The text is stored in a </h3> */}
        <h3>Local Storage</h3>
        <h5>(Won't change even reload or restart)</h5><br />
        <div></div>
        <div className='grid'>
        <input className='hrjinput' value={title} onChange={handleTitle} placeholder="Enter the text here" />
        <input className='hrjinput' value={author} onChange={handleAuthor} placeholder="Enter the text here" />
        </div><br />
        <h3>{title || author? <p>{title} {author?"By":null} {author}</p> : 'input value'}</h3>
        <div className='hrjbtns'>
          <Button variant='danger' onClick={deleteTitle}>Delete Title</Button>
          <Button variant='danger' onClick={deleteAuthor}>Delete Author</Button>
          <Button variant='primary' onClick={handleClear}>Clear</Button>
        </div>
      </div>
    );
}

export default LocalStorage