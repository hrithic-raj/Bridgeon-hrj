function spr(a,b){
    function sp(num){
        let digits=num.toString().split('');
        let sum = digits.reduce((acc,val,ind)=>{
            return acc+Math.pow(Number(val),ind+1);
        },0);
        return sum==num;
    }
    let result=[];
    for(let i=a; i<=b; i++){
        if(sp(i)){
            result.push(i);
        }
    }
    return result;
}t
console.log(spr(1, 10));  // Output: [1, 2, 3, 4, 5, 6, 7, 8, 9]
console.log(spr(1, 100)); // Output: [1, 2, 3, 4, 5, 6, 7, 8, 9, 89]