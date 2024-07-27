function koya(arr){
    let sum=Math.sign(arr.reduce((total,value) => total+value))
    if(sum==-1){
        return "negative";
    }
    else if(sum==1){
        return "positive";
    }
    else{
        return "zero";
    }
}
console.log(koya([0, 1, 4]));
console.log(koya([0,-1,-5]));
console.log(koya([0]));