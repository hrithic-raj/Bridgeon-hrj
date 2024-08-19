
function correctSpacing(str){
    let word=str.trim().split(/\s+/).join(" ");
    return word; 
}

console.log(correctSpacing(" The film  starts  at        midnight. ")); //The film starts at midnight.