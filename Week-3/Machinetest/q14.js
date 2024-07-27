function koya(obj){
    let length=obj.marks.length;
    let sum=obj.marks.reduce((total,value) => (total+value))
    let avg=sum/length;
    return avg;

}
console.log(koya({name: "John", marks: [25, 45, 10, 30] }));
console.log(koya({name: "Kevin", marks: [50, 45, 40, 40, 25] }));