import React, { useReducer} from 'react'
// import { Button} from 'react-bootstrap'
// import ThemeContext from './ThemeContext';

const initial={count : 0};

function reducer(state,action){
    switch (action.type){
        case 'add': 
            return {count : state.count + 1};
        case 'sub':
            return {count : state.count - 1};
        case 'add-5':
            return {count : state.count + 5};
        case 'reset':
            return {count : initial.count};
        default:
            return state;
    }
}


function Counter() {
    const [state,setState]=useReducer(reducer,initial);
    // const {bgColor}=useContext(ThemeContext);
  return (
    <div className='counter flex'>
        <div className='flex-1'>
            <button className='hrjbtn' onClick={()=>setState({type : 'add'})}>Increment</button>
            <button className='hrjbtn' onClick={()=>setState({type : 'sub'})}>Decrement</button>
            <button className='hrjbtn' onClick={()=>setState({type : 'add-5'})}>Add 5</button>
            <button className='hrjbtn' onClick={()=>setState({type : 'reset'})}>Reset</button>
        </div>
        <div className='flex-1 wbox'>
            <h1>Count {state.count}</h1>
        </div>
    </div>
  )
}

export default Counter;