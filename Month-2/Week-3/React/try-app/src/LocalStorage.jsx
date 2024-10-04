import React, { useEffect, useState } from 'react'

function LocalStorage() {
    const [state,setState]=useState('')
    const handleChange=(e)=>{
        localStorage.setItem("name",e.target.value)
        setState(e.target.value)
    }
    useEffect(()=>{
        const nameValue=localStorage.getItem("name")
        if(nameValue){
            setState(nameValue);
        }
    })
    const handleDel=()=>{
        localStorage.removeItem("name")
        setState('')
    }
    const handleClear=()=>{
        localStorage.clear()
        setState('')
    }
  return (
    <div>
        <input type="text" onChange={handleChange}/>
        <h1>{state}</h1>
        <button onClick={handleDel}>Delete</button>
        <button onClick={handleClear}>Clear</button>
    </div>
  )
}

export default LocalStorage