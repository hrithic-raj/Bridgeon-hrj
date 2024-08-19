
// function hrj(str){
//     let arr=[];
//     let ar=[];
//     arr=str.trim().split(" ").reverse();
//     for(let x of arr){
//         if(x!==' ' && x!==''){
//             ar.push(x);
//         }
//     }
//     return ar.join(" ");

// }

// console.log(hrj("we are bridgeon")); //Output: "bridgeon are we
// console.log(hrj(" hello   world ")); //output: " world hello"




// function hrj(str){
//     for(let i=0; i<=str.length-1; i++){
//         if(i%2===0){
//             let e1.push(str[i].toUpperCase());
//             let e2.push(str[i].toLowerCase());
//         }
//         else{
//             let e2.push(str[i].toUpperCase());
//             let e1.push(str[i].toLowerCase());
//         }
//     }
//     return [e1.join(''),e2.join('')];
// }

// console.log(hrj("abcdef")); //['AbCdEf', 'aBcDeF'].
// console.log(hrj("bridgeon")); //[“BrIdGeOn” , “bRiDgEoN”]




// function hrj(arr){
//     return arr.filter(value => typeof value === 'number');
// }
//  console.log(hrj([1,"bridgeon",true,5])); //[1,5]
//  console.log(hrj(["10",false,6,"Ten"]));  // [6]



// function hrj(str1,str2){
//     return str1.length==str2.length;
// }
// console.log(hrj("AB", "CD"));
// console.log(hrj("ABG", "CD"));
// console.log(hrj("aergarg", "argargarg"));



// function hrj(arr){
//     let y=[];
//     for (let i=1;i<arr.length;i++){
//         if(arr[i]!==arr[i-1]+1){
//             y.push(arr[i]);
//         }
//     }
//     return y;
// }
// console.log(hrj([1,2,3,4,6,7,8]));  //Output: [6]
// console.log(hrj([10,11,12,20,21,22,30])); //Output: [20,30]




// function hrj(str){
//     let ar1="",ar2="";
//     for(let i=0; i<str.length; i++){
//      if(str.charAt(i)==str.charAt(i).toLowerCase()){
//         ar1+=str.charAt(i);
//      }
//      else{
//         ar2+=str.charAt(i);
//      }
//     }
//     return [[ar1],[ar2]];
// }
// console.log(hrj("bridGEON")); //[[“brid”],[”GEON”]]
// console.log(hrj("MICROsoft")); // [[“soft”],[”MICRO”]]
// console.log(hrj("FacEBoOK"));  // [[“aco”],[”FEBOK”]]





// function hrj(arr){
//     return arr.filter(value => typeof value == 'string');
// }
// console.log(hrj([1,"bridgeon",true,"solutions"])); //[“bridgeon”,”solutions”]
// console.log(hrj(["10",false,6,"Ten"])); // [“10”,”Ten”]




// function hrj(str){
//     return str.length%2==0;
// }
// console.log(hrj("aerar")); // true
// console.log(hrj("adrfar")); // false




// function hrj(arr){
//     let x=[];
//     let flag=true;
//     arr.forEach(element => {
//         if(x.includes(element)){
//             flag=false;
//         }
//         else{
//             x.push(element);
//         }
//     });
//     console.log(x);
//     return flag;
// }

// console.log(hrj(["a", "b", "c", "d"]));
// console.log(hrj([1,2,3,4,5,1]));
// console.log(hrj(["p", "R", "o", "G", "r", "A", "m"]));


// function cap(str){
//     let arr=[]
//     for(let i=0; i<str.length; i++){
//         if(str[i]!=" "){
//             arr.push(str.slice(0,i)+str[i].toUpperCase()+str.slice(i+1))
//         }
//     }
//     return arr;
// }
// console.log(cap("he llo"));
