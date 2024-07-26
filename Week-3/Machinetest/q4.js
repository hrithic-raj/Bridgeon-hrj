function koya(str){
    let strr='';
    for(let i=0; i<=str.length-1; i++){
        strr+=str.charAt(i).repeat(2);
    }
    return strr;
}
console.log(koya("string"));
console.log(koya("Hello World"));
console.log(koya("1234!_"));