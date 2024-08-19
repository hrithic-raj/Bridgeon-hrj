

function hrj(str){
    str=str.toLowerCase();
    let set=new Set(str);
    return set.size==str.length;
}
console.log(hrj("abcdeA")); //false
console.log(hrj("1212"));  //false
