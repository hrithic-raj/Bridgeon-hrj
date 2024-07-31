function correctSpacing(str){
    let arr=[];
    let split=str.split(" ")
    for(let x of split){
        if(x!=" " && x!=""){
            arr.push(x)
        }
    }
    return arr.join(" ")
}
console.log(correctSpacing("The film starts at midnight. "));
console.log(correctSpacing("The waves were      crashing on the shore. "));
console.log(correctSpacing(" Always look on    the   bright side of life."));