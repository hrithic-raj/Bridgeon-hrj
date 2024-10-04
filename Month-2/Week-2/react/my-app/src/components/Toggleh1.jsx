import React,{useRef} from 'react'
import { Button } from 'react-bootstrap';

function Toggleh1() {
    //toggle h1
  const h1ref=useRef(null);
  const h1toggle=()=>{
    if(h1ref.current.style.display==='none'){
      h1ref.current.style.display='block';
    }else{
      h1ref.current.style.display='none';
    }
  };
  return (
    <div style={{textAlign: 'center'}}>
        <br /><br />
        <h1>Access DOM element by Ref</h1>
        <br /><br />
        <Button onClick={h1toggle}>Click</Button>
        <br /><br />
        <h1 ref={h1ref}>Toggle Text</h1>
        
      </div>
  )
}

export default Toggleh1