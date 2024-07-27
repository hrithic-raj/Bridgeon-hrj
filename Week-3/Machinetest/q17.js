function koya(obj,num){
    let number=Infinity;
    let key='';
    for(let x in obj){
        let diff=Math.abs(obj[x]-num)
        if(diff>number){
            number=diff;
            key=x;
        }
    }
    return key;
}
console.log(koya({chapter1 : 1, chapter2 : 15, chapter3 : 20}, 10));
console.log(koya({HTML : 7, CSS : 10, JavaScript : 15}, 12));
console.log(koya({A : 1, B : 5}, 3));