function koya(obj){
    let Largest=Math.max(...obj.marks);
    return Largest;
}
console.log(koya({name: "John", marks: [25, 45, 10, 30] }))