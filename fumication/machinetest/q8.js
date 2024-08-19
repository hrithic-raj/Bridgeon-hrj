// The goal of this exercise is to convert a string
// to a new string where each character in the 
// new string is "(" 
// if that character appears only once in 
// the original string, or ")" 
// if that character appears more than once in 
// the original string. Ignore capitalization 
// when determining if a character is a duplicate.

// Examples
// "din"      =>  "((("
// "recede"   =>  "()()()"
// "Success"  =>  ")())())"
// "(( @"     =>  "))((" 

function dup(str){
    str=str.toLowerCase();
    let obj={};
    for(let x of str){
        obj[x]=(obj[x]||0)+1;
    }
    res='';
    for(let x of str){
        res+=obj[x]===1?"(":")";
    }
    return res;
}
console.log(dup("recede"));
console.log(dup("Success"));

