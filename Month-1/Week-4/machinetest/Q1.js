//vowels

function vo(str){
    let v="aeiou",c=0;
    for(let x of str){
        if(v.indexOf(x)!==-1){
            c+=1
        }
    }
    return c;
}
console.log(vo("argaertat"));
