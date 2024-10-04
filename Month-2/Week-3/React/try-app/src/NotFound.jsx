import React, { useEffect } from 'react'
import { useNavigate } from 'react-router-dom'
function NotFound() {
    const navigate=useNavigate();
    useEffect(()=>{
        setTimeout(()=>{
            navigate('/')
        },1000)
    },[])
  return (
    <div><h1>NotFound</h1></div>
  )
}

export default NotFound