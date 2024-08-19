function koya(str){
    let arr=[];
    arr=str.split(" ").reverse();
    return arr.join(" ").trim().replaceAll("  "," ");
}
console.log(koya(" Welcome  to  Bridgeon "));
