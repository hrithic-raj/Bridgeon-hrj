// const [first, second, ...rest] = [1, 2, 3, 4, 5];

// console.log(first);  // Output: 1
// console.log(second); // Output: 2
// console.log(rest);   // Output: [3, 4, 5]


// const { a, b, ...rest } = { a: 1, b: 2, c: 3, d: 4 };

// console.log(a);    // Output: 1
// console.log(b);    // Output: 2
// console.log(rest); // Output: { c: 3, d: 4 }


// const user = {
//     name: "John Doe",
//     age: 30,
//     city: "New York"
// };

// const { age,name,city } = user;

// console.log(name);  // Output: John Doe
// console.log(age);   // Output: 30
// console.log(city);  // Output: New York


const user = {
    name: "John Doe",
    age: 30,
    job:{
        doc:"engi",
        lang:"eng"
    },
    city: "New York"
};

// Renaming variables during destructuring
const { name: userName, age: userAge, job:{doc,lang}, city: userCity } = user;

console.log(userName);  // Output: John Doe
console.log(doc);   // Output: 30
console.log(lang);  // Output: New York

