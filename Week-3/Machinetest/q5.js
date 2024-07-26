function koya(str){
    let strr='';
    for(let i=str.length-1; i>=0; i--){
        strr+=str.charAt(i);
    }
    return strr;
}
console.log(koya("!trams era uoY"));