// let i,j,row=5,pattern="";
//         for( i=row; i>=1; i--){
//             for(j=row; j>=row-i+1; j--){
//             pattern += " " +j;
//             }
//             pattern += "\n";
//         }
//         console.log(pattern);

// let i,j,row=5,pattern="";
// for(i=1; i<=row; i++){
//     for(j=1;j<=i; j++){
//         pattern += String.fromCharCode(64+j);
//     }
//     pattern += "\n";
// }console.log(pattern);


// let i,j,pattern="",row=5;
// for( i=1; i<=row; i++){
//     for( j=1; j<=i; j++){
//         pattern += " " +j;
//     }
//     pattern += ("\n");
// }console.log(pattern);


let i,j,pattern="",row=3,text=1;
for( i=1; i<=row; i++){
    for( j=1; j<=5; j++){
        if(j>=4-i && j<=2+i){
        pattern += text;
        text ++;
        }
        else{
            pattern += " ";
        }
    }
    pattern += ("\n");
}console.log(pattern);


// let i,j,pattern="",row=5,text=1;
// for( i=1; i<=row; i++){
//     for( j=1; j<=row-i+1; j++){
//         pattern += " " +j;
//     }
//     pattern += ("\n");
// }console.log(pattern);

// let i,j,pattern="",row=5,text=1;
// for( i=1; i<=row; i++){
//     for( j=row-(row-i); j>=1; j--){
//         pattern += " " +String.fromCharCode(64+j);
//     }
//     pattern += ("\n");
// }console.log(pattern);
 

// function cap(str) {
//    let arr = str.toLowerCase().split(" ");
//    for(let i=0; i<=arr.length-1; i++){
//     arr[i]=arr[i][0].toUpperCase()+ arr[i].slice(1);
//    }
//     return arr.join(' ');
// }
// console.log(cap("bridgeon solutions"));
// console.log(cap("How Are You?"));
// console.log(cap("HELLO WORLD"));

// function oe(str){
//     let result=false,length=str.length;
//     if(length % 2== 0){
//         result=true;
//     }
//     return result
// }
//  console.log(oe("cherrye"));

// function dup(str){
//     let result,unique;
//     unique = new Set(str);
//     result=Array.from(unique).join('');
//     return result;
// }
//  console.log(dup("cherryy"));


// const arr=["A","R","R","A","Y"]
// let i,j,pattern="",row=4;
// for( i=0; i<=row; i++){
//     for( j=0; j<=i; j++){
//         pattern += " " +arr[j];
//     }
//     pattern += ("\n");
// }console.log(pattern);


// function getSum(arr) {
//     let sum = 0;
//     for (let i = 0; i < arr.length; i++) {
//       sum += Math.abs(arr[i]);
//     }
//     return sum;
//   }
  
//   // Examples
//   console.log(getSum([2, -1, 4, 8, 10]));    // ➞ 25
//   console.log(getSum([-3, -4, -10, -2, -3])); // ➞ 22
//   console.log(getSum([2, 4, 6, 8, 10]));     // ➞ 30
  


// function uni(str){
//     let uniq= new Set(str);
//     return uniq.size == str.length;
// }
// console.log(uni("HRJj"));


// function two(str1,str2){
//     return str2.length == str1.length;
// }
// console.log(two("HRJ","hrj"));


// function middle(str){
//     let length=str.length;
//     let mid=length/2;
//     if(length%2==0){

//         return str.slice(mid-1,mid+1);
//     }
//     else{
//         return str.charAt(length/2);
//     }
// }
// console.log(middle("HRJf"));



// function ser(str){
//     let word=str.split(" ");
//     let result=word.indexOf('Bridgeon')+1;
//     return ("i found Bridgeon at "+result);
// }
// console.log(ser( "I am finding Bridgeon"));
// console.log(ser( "We are Bridgeon"));
// console.log(ser( "Bridgeon is good"));


// let i,j,k,row=5,pattern="";
// for(i=0; i<=row; i++){
//     for(j=1; j<=i; j++){
//         if (j==1 || i==5 || j==i){
//             pattern+="* ";
//         }
//         else{
//             pattern+="  "
//         }
//     }
//     pattern+="\n"
// }
// console.log(pattern);


// let row=5,i,j,pattern='';
// for(i=1; i<=5; i++){
//     for(j=1; j<=row; j++){
//        if(j==1 || j==row || i==1 || i==j || i==row || j==row-i+1){
//         pattern += "* ";
//        }
//        else{
//         pattern += "  ";
//        }
        
//     }
//     pattern += "\n";
// }
// console.log(pattern)

// let i,j,row=5,pattern="";
// for(i=row; i>=1; i--){
//     for(j=row; j>=row-i+1; j--){
//         pattern +=""+j;
//     }
//     pattern+="\n";
// }
// console.log(pattern);


// function dupp(str){
//     let result="";
//     let length=str.length;
//     for(let i=0; i<length; i++){
//         if(result.indexOf(str[i]) === -1){
//             result += str[i];
//         }
//     }return result;
// }
// console.log(dupp("HHRRJJ"));
// let i,j,k,row=5,pattern="";
// for(i=1; i<=row; i++){
//     for(k=1; k<=row-i; k++){
//         pattern += " ";
//     }
//     for(j=1;j<=i+1*2-1; j++){
//         if(j==1 || j==i+1*2-1 || i==row){
//            pattern += "* ";
//         }
//         else{
//             pattern+="  ";
//         }
//     }
//     pattern += "\n";
// }
// console.log(pattern);