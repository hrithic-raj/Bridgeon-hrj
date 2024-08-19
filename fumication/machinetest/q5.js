// Build a pyramid-shaped tower, as an array/list of strings, given a positive integer number of floors. 
// A tower block is represented with "*" character.

// For example, a tower with 3 floors looks like this:

// [
//   "  *  ",
//   " *** ", 
//   "*****"
// ]
// And a tower with 6 floors looks like this:

// [
//   "     *     ", 
//   "    ***    ", 
//   "   *****   ", 
//   "  *******  ", 
//   " ********* ", 
//   "***********"
// ]

function tower(floor){
    let tower=[];
    for(let i=0; i<floor; i++){
        let sp=' '.repeat(floor-i-1);
        let st='*'.repeat(2*i+1);
        tower.push(sp+st+sp);
    }
    return tower;
}
console.log(tower(3));
