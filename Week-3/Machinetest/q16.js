function koya(str){
    let arr='';
    let arrr=str.split(" ");
    for(let x of arrr){
        if(x.length>arr.length){
            arr=x;
        }
    }
    return arr;
}
console.log(koya("Web Development Tutorial"));
console.log(koya("We are Bridgeon"));