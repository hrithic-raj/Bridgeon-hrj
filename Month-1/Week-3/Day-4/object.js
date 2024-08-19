//object

const person={
    firstName : 'hrj',
    lastName : 'gamer',
    age : 20
};

console.log(person);
//accessing
console.log(person.firstName);
console.log(person.lastName);
//modify
person.age=21;
console.log(person.age);
//add
person.gender="male";
console.log(person.gender);
//display object
console.log(person);
//display all keys
console.log(Object.keys(person));
//display all values
console.log(Object.values(person));
//key-value pair in an array
console.log(Object.entries(person));

//nested object

const person1={
    name:{
        first : 'hrj',
        last : 'gamer'
    },
    age : 20
};
console.log(person1);
console.log(person1.name.last);