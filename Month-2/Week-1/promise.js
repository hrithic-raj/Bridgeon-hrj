// const mypro= new Promise((resolve,reject) => {
//     let success=true;
//     if(success){
//         resolve("op success")
//     }
//     else{
//         reject("op failed")
//     }
// })

// .then(res=> res)
// .then(re=>console.log(re))
// .catch(err=> console.log(err))

// let promise1= Promise.resolve(3)
// let promise2= new Promise((resolve,reject) => setTimeout(resolve,1000,'foo'))
// let promise3= 43;
// Promise.all([promise1,promise2,promise3])
// .then (res=>console.log(res))
// .catch(err=>console.error(err))

// const promise1 = new Promise((resolve, reject) => setTimeout(resolve, 500, 'one'));
// const promise2 = new Promise((resolve, reject) => setTimeout(resolve, 300, 'two'));
// const promise3 = new Promise((resolve, reject) => setTimeout(resolve, 200, 'three'));

// Promise.race([promise1,promise2,promise3])
// .then(res=>console.log(res))
// .catch(err=>console.log(err))


// const promise = new Promise((resolve, reject) => {
//     setTimeout(resolve, 1000,"done");
//   });
  
//   promise.then(result => console.log(result)); // Output after 1 second: "Done"

// console.log('Start');
// setTimeout(() => {
//     console.log('This runs after 2 seconds');
// }, 2000);
// console.log('End');