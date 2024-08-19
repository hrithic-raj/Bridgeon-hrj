// function firstOperation(data, callback) {
//     setTimeout(() => {
//       console.log("First operation:", data);
//       callback(data + 1);
//     }, 1000);
//   }
  
//   function secondOperation(data, callback) {
//     setTimeout(() => {
//       console.log("Second operation:", data);
//       callback(data + 1);
//     }, 1000);
//   }
  
//   function thirdOperation(data, callback) {
//     setTimeout(() => {
//       console.log("Third operation:", data);
//       callback(data + 1);
//     }, 1000);
//   }
  
//   // Using nested callbacks
//   firstOperation(1, (result1) => {
//     secondOperation(result1, (result2) => {
//       thirdOperation(result2, (result3) => {
//         console.log("Final result:", result3);
//       });
//     });
//   });



// function first(data,callback){
//     setTimeout(()=>{
//         console.log("fisrt",data);
//         callback(data+1);
//     },1000)
// }

// function second(data,callback){
//     setTimeout(()=>{
//         console.log("second",data);
//         callback(data+1);
//     },1000)
// }

// function third(data,callback){
//     setTimeout(()=>{
//         console.log("third",data);
//         callback(data+1);
//     },1000)
// }

// first(1,(result1) => {
//     second(result1,(result2)=> {
//         third(result2,(result3)=>{
//             console.log('final result',result3)
//         })
//     })
// })
  
//   function firstOperation(data) {
//     return new Promise((resolve) => {
//       setTimeout(() => {
//         console.log("First operation:", data);
//         resolve(data + 1);
//       }, 1000);
//     });
//   }
  
//   function secondOperation(data) {
//     return new Promise((resolve) => {
//       setTimeout(() => {
//         console.log("Second operation:", data);
//         resolve(data + 1);
//       }, 1000);
//     });
//   }
  
//   function thirdOperation(data) {
//     return new Promise((resolve) => {
//       setTimeout(() => {
//         console.log("Third operation:", data);
//         resolve(data + 1);
//       }, 1000);
//     });
//   }
  
//   firstOperation(1)
//   .then((result1) => {
//     return secondOperation(result1);
//   })
//   .then((result2) => {
//     return thirdOperation(result2);
//   })
//   .then((finalResult) => {
//     console.log("Final result:", finalResult);
//   })
//   .catch((error) => {
//     console.error("An error occurred:", error);
//   });



// function first(data){
//     return new Promise((resolve)=>{
//         setTimeout(()=>{
//             console.log("fisrt",data);
//             resolve(data+1);
//         },1000)
//     })
// }

// function second(data){
//     return new Promise((resolve)=>{
//         setTimeout(()=>{
//             console.log("second",data);
//             resolve(data+1);
//         },1000)
//     })
// }

// function third(data){
//     return new Promise((resolve)=>{
//         setTimeout(()=>{
//             console.log("third",data);
//             resolve(data+1);
//         },1000)
//     })
// }

// first(1)
// .then(result1 => second(result1))
// .then(result2 => third(result2))
// .then(final => console.log("final",final))
// .catch(err=>console.error("error",err))

// async function operations() {
//     try{
//         const result1 = await first(1);
//         const result2 = await second(result1);
//         const result3 = await third(result2);
//         console.log("final",result3);
//     }
//     catch(err){
//         console.error("error:",err)
//     }
// }

// operations();


//   async function performOperations() {
//     try {
//       const result1 = await firstOperation(1);
//       const result2 = await secondOperation(result1);
//       const result3 = await thirdOperation(result2);
//       console.log("Final result:", result3);
//     } catch (error) {
//       console.error("An error occurred:", error);
//     }
//   }
  
//   performOperations();  
