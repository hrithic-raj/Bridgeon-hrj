const arr=[3,4,16,28,33,12];

//using filter and reduce

const narr=arr.filter(value => value%4==0);
const sum=narr.reduce((total,value) => total+value);
console.log('multiples of 4 = '+narr);
console.log('sum='+sum);

//using funtions and loops

// let sum4=0;
// function sum(num){
//     for(let i=0; i<=num.length; i++){
//         if(num[i]%4==0){
//         sum4 += num[i];
//         }
//     }
//     return sum4;
// }
// console.log(sum(arr));