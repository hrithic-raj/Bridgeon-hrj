// Split Methods

// Split at Capital Letters:

// let str = "ThisIsAString";
// let result = str.split(/(?=[A-Z])/);
// console.log(result); // ["This", "Is", "A", "String"]
// Split at Digits:

// Split at Digits

// let str = "abc123def456";
// let result = str.split(/\d/);
// console.log(result); // ["abc", "", "", "def", "", ""]
// Split at Word Boundaries:


// let str = "Hello world! How are you?";
// let result = str.split(/\b/);
// console.log(result); // ["Hello", " ", "world", "! ", "How", " ", "are", " ", "you", "?"]
// Split at Non-Word Characters:


// let str = "Hello, world!";
// let result = str.split(/\W+/);
// console.log(result); // ["Hello", "world", ""]
// Split at Whitespace:


// let str = "Hello world! How are you?";
// let result = str.split(/\s+/);
// console.log(result); // ["Hello", "world!", "How", "are", "you?"]
// Replace Methods
// Replace Digits with an Asterisk:


// let str = "abc123def456";
// let result = str.replace(/\d/g, '*');
// console.log(result); // "abc***def***"
// Replace Non-Word Characters with a Space:


// let str = "Hello, world!";
// let result = str.replace(/\W+/g, ' ');
// console.log(result); // "Hello world "
// Replace Multiple Spaces with a Single Space:


// let str = "Hello    world!  How  are you?";
// let result = str.replace(/\s+/g, ' ');
// console.log(result); // "Hello world! How are you?"
// Remove All Vowels:


// let str = "Hello world!";
// let result = str.replace(/[aeiouAEIOU]/g, '');
// console.log(result); // "Hll wrld!"
// Capitalize the First Letter of Each Word:


// let str = "hello world! how are you?";
// let result = str.replace(/\b\w/g, char => char.toUpperCase());
// console.log(result); // "Hello World! How Are You?"
// Convert CamelCase to Space Separated:


// let str = "thisIsCamelCase";
// let result = str.replace(/([a-z])([A-Z])/g, '$1 $2');
// console.log(result); // "this Is Camel Case"