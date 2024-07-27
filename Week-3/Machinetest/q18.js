function koya(arr){
    let ar=[];
    for(let x of arr){
        ar.push(x.salary)
    }
    let sum=ar.reduce((total,value) => total+value);
    return sum;
}
console.log(koya([
    { name: "John", salary: 23000 },
    { name: "Steve", salary: 40000 },
    { name: "Martin", salary: 15000 }
    ]));