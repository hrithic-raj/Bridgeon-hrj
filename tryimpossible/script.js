let dot=document.getElementById("dot_toggle");
let main=document.getElementById("main");
let toggle=document.getElementById("toggle")

// let istoggled=false;

// toggle.addEventListener("click",funtion(){
//     // if(istoggled){
//     //     main.style.backgroundColor= "pink";
//     //     console.log("hello")
//     //     dot.style.left="55px";
//     // }
//     // else{
//     //     main.style.backgroundColor= "pink";
//     //     console.log("hello")
//     //     dot.style.left="55px";
//     // }

//     if (istoggled) {
//         // Reset to original state
//         main.style.backgroundColor = "aqua";
//         dot.style.backgroundColor = "yellow";
//         dot.style.left = "5px"; // Move dot back to the original position
//     } else {
//         // Change to toggled state
//         main.style.backgroundColor = "pink";
//         dot.style.backgroundColor = "blue"; // Change color of dot
//         dot.style.left = "55px"; // Move dot to the right
//     }
//     istoggled = !istoggled;
// })





let isToggled = true;

toggle.addEventListener("click", function() {
    if (isToggled) {
        main.style.backgroundColor = "black";
        dot.style.backgroundColor = "black";
        dot.style.left = "55px";
        isToggled=false;
        dot.style.transition="1s"
    } else {
        main.style.backgroundColor = "aqua";
        dot.style.backgroundColor = "yellow";
        dot.style.left = "5px";
        isToggled=true;
        // dot.style.transition= "1s";
    }
});
