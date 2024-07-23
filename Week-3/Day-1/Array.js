const Bikes=["V3" , "bullet","duke","NS"];
let len=Bikes.length;
let text="<ul>";

    for (let i = 0; i<=len; i++){
        text+="<li>" + Bikes[i] + "</li>";
    }
    text+="</ul>";
console.log(text);