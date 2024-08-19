arr=["mom", "bridgeon", "madam"];

//using filter and funtion

// const narr=arr.filter(palindrome);
// function palindrome(value){
//    let out=value.split('').reverse().join('')
//         return value==out;
// }
// console.log(narr);

//using filter and arrow funtion

const narr=arr.filter(value => value == value.split('').reverse().join(''));
console.log(narr);