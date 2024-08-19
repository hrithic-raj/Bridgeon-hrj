const Bikes=["V3" , "bullet","duke","NS"];
let len=Bikes.length;
let text="<ul>";

    for (let i = 0; i<=len; i++){
        text+="<li>" + Bikes[i] + "</li>";
    }
    text+="</ul>";
    let str=Bikes.join("*");
console.log(str);
console.log(Array.isArray(Bikes));
console.log();