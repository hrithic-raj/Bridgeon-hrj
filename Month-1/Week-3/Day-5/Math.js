
console.log("Math.round")

console.log(Math.round(4.5));  // Output: 5
console.log(Math.round(4.4));  // Output: 4
console.log(Math.round(-4.5)); // Output: -4
console.log(Math.round(-4.6)); // Output: -5

console.log("Math.ceil() -next largest");

console.log(Math.ceil(4.1));  // Output: 5
console.log(Math.ceil(4.9));  // Output: 5
console.log(Math.ceil(-4.1)); // Output: -4
console.log(Math.ceil(-4.9)); // Output: -4

console.log("Math.floor() -opposite of ceil");

console.log(Math.floor(4.9));  // Output: 4
console.log(Math.floor(4.1));  // Output: 4
console.log(Math.floor(-4.1)); // Output: -5
console.log(Math.floor(-4.9)); // Output: -5


console.log("Math.trunc() -just like parseInt()");

console.log(Math.trunc(4.9));  // Output: 4
console.log(Math.trunc(4.1));  // Output: 4
console.log(Math.trunc(-4.9)); // Output: -4
console.log(Math.trunc(-4.1)); // Output: -4


console.log("Math.pow() -2nd num will be the power of 1st");

console.log(Math.pow(2, 3));  // Output: 8
console.log(Math.pow(5, 2));  // Output: 25
console.log(Math.pow(2, -2)); // Output: 0.25


console.log("Math.sign() -give the number's sign, 1=+ve -1=-ve 0=zero");

console.log(Math.sign(5));    // Output: 1
console.log(Math.sign(-5));   // Output: -1
console.log(Math.sign(0));    // Output: 0
console.log(Math.sign(-0));   // Output: -0


console.log("Math.sqrt() -sqaure root");

console.log(Math.sqrt(9));    // Output: 3
console.log(Math.sqrt(16));   // Output: 4
console.log(Math.sqrt(2));    // Output: 1.4142135623730951


console.log("Math.abs() -absolute(remove sign)");

console.log(Math.abs(5));     // Output: 5
console.log(Math.abs(-5));    // Output: 5
console.log(Math.abs(0));     // Output: 0


console.log("Math.min() & Math.max()");

console.log(Math.min(1, 2, 3));  // Output: 1
console.log(Math.min(-1, -2, -3)); // Output: -3
console.log(Math.max(1, 2, 3));  // Output: 3
console.log(Math.max(-1, -2, -3)); // Output: -1


console.log("Math.random() -return a random number");

console.log(Math.random());  // Output: a random number between 0 and 1
console.log(Math.random() * 10); // Output: a random number between 0 and 10
console.log(Math.floor(Math.random() * 100)); // Output: a random integer between 0 and 99