import React, { useReducer } from 'react'

const initial={count : 0}
const reducer=(state,action)=>{
    switch (action.type){
        case "add":
            return {count : state.count +1};
        case "sub":
            return {count : state.count -1};
        case "reset":
            return {count : initial.count};
        default:
            return state;
    }
}


function UseReducer() {
    const [state,dispatch]=useReducer(reducer,initial)
  return (
    <div>
        <h1>{state.count}</h1>
        <button onClick={()=>dispatch({type:"add"})}>+ 1</button>
        <button onClick={()=>dispatch({type:"sub"})}>- 1</button>
        <button onClick={()=>dispatch({type:"reset"})}> reset </button>
    </div>
  )
}

export default UseReducer