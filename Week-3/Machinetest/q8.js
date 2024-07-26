function koya(arr){
    let arrr=[];
    let ar=[];
    for(let x of arr){
        arrr.push(x.age);
    }
    let max=Math.max(...arrr);
    let min=Math.min(...arrr);
    let diff=max-min;
    ar.push(min,max,diff);
    return ar
}
console.log(koya([
    {name:"John",age:15},
    {name:"Steve",age:50}
    ]));
console.log(koya([
    {name:"Mark",age:38},
    {name:"Charlie",age:10},
    {name:"Anna",age:25}
    ]));
console.log(koya([
    { name: "Rachel", age: 20 },
    { name: "Jennifer", age: 45 },
    { name: "Jack", age: 43 },
    { name: "Maria", age: 3 }
    ]));