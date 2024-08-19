const fruits=["apple","orange","graps","banana"];
const num=[1,2,3,4,5,6];
// map
const uppercase=fruits.map(fruits => fruits.toUpperCase());
console.log(uppercase);

//filter
const odd=num.filter(num => num % 2 !== 0);
console.log(odd);

//reduce
const sum=num.reduce((total,value) => total + value);
console.log(sum);

//forEach
fruits.forEach(fruit => console.log(fruit));
