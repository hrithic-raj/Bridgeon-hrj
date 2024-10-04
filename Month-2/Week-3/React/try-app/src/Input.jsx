import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom'
// import StateContext from './Context'
// import App from './App'
function Input() {
    const [state,setState]=useState('')
    const navigate=useNavigate()
    const handleSubmit=()=>{
        if(state.trim()){
            navigate('/')
        }
    }
  return (
      <div>
        <h1>Input</h1>
        <input type="text" value={state} onChange={(e)=>setState(e.target.value)}/>
        <button type='submit' onClick={handleSubmit}>submit</button>
        <h1>{state}</h1>
    </div>
    
  )
}

export default Input