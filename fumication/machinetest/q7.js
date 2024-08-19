function cc(str){
    return str.split(/(?=[A-Z])/).join(" ")
}
console.log(cc("camelCasing"));
