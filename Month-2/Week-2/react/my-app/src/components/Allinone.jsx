import 'bootstrap/dist/css/bootstrap.min.css';
import '../css/App.css';
import React,{useEffect, useState, useRef} from 'react';
import { Button, Form } from 'react-bootstrap';
function Allinone() {
  let initial=0;
  const [count,setCount]=useState(initial);
  const [text,setText]=useState('');
  const [tin,setTin]=useState('');
  const [tout,setTout]=useState('');

  //display when submit
  const submit=(e)=>{
    e.preventDefault();
    setTout(tin);
    setTin('')
  };

//focus using ref
  const textref=useRef(null)
  useEffect(()=>{
      if(textref.current){
        textref.current.focus();
      }
  },[count]);
  
  //pre count using ref
  const preref=useRef(initial);
  useEffect(()=>{
    preref.current=count;
  },[count]);
  const precount = preref.current;

  return (
    <div className="Allinone">
      <div className="counter">
      <div className='header'>
        <h1>Counter :  {count} </h1>
        <h1>pre count : {precount}</h1>
      </div><br />
      <div className="buttons">
      <Button onClick={()=>setCount(count=>count+1)}>Increment</Button>
      <Button onClick={()=>setCount(count=>count-1)}>Decrement</Button>
      <Button onClick={()=>setCount(count=>initial)}>Reset</Button>
      <Button onClick={()=>setCount(count=>count+5)}>increment 5</Button>
      </div>
      </div><br />
      <Form onSubmit={submit} style={{textAlign : 'center'}}>
          <Form.Control ref={textref} type='text' value={text} onChange={(e)=>setText(e.target.value)} placeholder='focus when count change'/> <br />
          <h1>Text will show when you change : {text}</h1><br />
          <Form.Control type='text' value={tin} onChange={(e)=>setTin(e.target.value)}/> <br />
          <Button type='submit'>Submit</Button>
          <h1>Text will show when you submit : {tout}</h1>
      </Form>
    </div>
  );
}

export default Allinone;