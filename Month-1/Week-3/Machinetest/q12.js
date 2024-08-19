
function koya(str){
    let arr=[],sum=0;
    
    arr=str.filter(value => value%3==0);
    sum=arr.reduce((total,value) => total+value);
    return sum;
}

console.log(koya([27, 15, 7, 1, 4]));
console.log(koya([1, 3, 8, 5, 9]));