// Implement the function unique_in_order which takes as argument a sequence and returns a list of items without any elements with the same value next to each other and preserving the original order of elements.

// For example:

// uniqueInOrder('AAAABBBCCDAABBB') == ['A', 'B', 'C', 'D', 'A', 'B']
// uniqueInOrder('ABBCcAD')         == ['A', 'B', 'C', 'c', 'A', 'D']
// uniqueInOrder([1,2,2,3,3])       == [1,2,3]

function re(str){
    // let res=[];
    // for(let i=0; i<str.length; i++){
    //     if(str[i]!==str[i-1]){
    //         res.push(str[i]);
    //     }
    // }
    // return res;
    return [...str].filter((a,i) => a !==str[i-1])
}
console.log(re('AAAABBBCCDAABBB'))
console.log(re([1,2,2,3,3]));
