const initialstate={
  count : 10
}

const countReducer=(state=initialstate,action)=>{
  switch(action.type){
    case 'INCREMENT':
      return {count:state.count+1};
      case 'DECREMENT':
        return {count:state.count-1};
        default :
        return state;
  }
}

const store=Redux.createStore(countReducer)

const displayCount=document.getElementById('counter')
const incbtn=document.getElementById('incrementBtn')
const decbtn=document.getElementById('decrementBtn')

const reder=()=>{
  const state = store.getState();
  displayCount.innerText = state.count;
}

reder()
store.subscribe(reder)

incbtn.addEventListener('click',()=>{
  console.log('+')
  store.dispatch({type:'INCREMENT'})
})
decbtn.addEventListener('click',()=>{
  console.log('-')
  store.dispatch({type:'DECREMENT'})
})