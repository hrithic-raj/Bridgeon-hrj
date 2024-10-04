import React, { useRef } from 'react'
import { useSelector, useDispatch } from 'react-redux'
function Counter() {
    const count=useSelector(state=>state.count)
    const bgRef=useRef();
    const dispatch=useDispatch();
    const increment = ()=>{
        dispatch({type:'INCREMENT'});
        bgRef.current.style.backgroundColor='blue'
    }
    const decrement = ()=>{
        dispatch({type:'DECREMENT'});
        bgRef.current.style.backgroundColor='pink'
    }
    return (
    <div ref={bgRef} style={{display:'flex',justifyContent:'center', marginTop:'200px',backgroundColor:'gray'}}>
        <button style={{width:'100px'}} onClick={increment}>+</button>
        <h1>Count:{count}</h1>
        <button style={{width:'100px'}} onClick={decrement}>-</button>
    </div>
  )
}

export default Counter