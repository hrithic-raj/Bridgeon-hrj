function koya(str){
    let arr=[];
    let aarr=[];
    arr=str.split(" ").map(value => {
        if(value.length>=5){
            aarr.push(value.split("").reverse().join(""))
            console.log();
        }
        else{
            aarr.push(value)
        }
    })
    return aarr.join(" ");
}
console.log(koya("Hey fellow warriors"));