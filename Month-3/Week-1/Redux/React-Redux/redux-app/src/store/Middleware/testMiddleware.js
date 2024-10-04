// function testMiddleware(store){
//     return (next)=>{
//         return (action)=>{
//             console.log("action dis",action);
//             const currentState=store.getstate();
//             console.log("curre state",currentState);
//             if(action.type==='counter/decrement' && currentState.counter.value===0){
//                 console.log('dec <0 !!!!')
//             }
//             if(action.type==='counter/increment'){
//                 action.payload = 2
//             }

//         }
//     }
// }

