import React, { useState } from 'react'

function ColorBox() {
    const [colorIndex,setColorIndex]=useState(0)
    const colors=['blue','red','green','pink']
    const handleClick=()=>{
        setColorIndex(pre=>pre===colors.length-1?0:pre+1)
    }
  return (
    <div onClick={handleClick} style={{width:'100px',height:'100px',backgroundColor:`${colors[colorIndex]}`}}></div>
  )
}

export default ColorBox