function koya(arr){
    let sum=arr.reduce((total,value) => total+value);
    if(sum%2==0){
        return "even";
    }
    else{
        return "odd";
    }
}
console.log(koya([0, 1, 4]));
console.log(koya([0,-1,-5]));
console.log(koya([0]));