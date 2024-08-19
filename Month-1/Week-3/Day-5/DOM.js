console.log(document.title);

const button = document.getElementById("btn");

button.addEventListener("click", function() {
    alert("Button clicked!");
});

let newH1=document.createElement("h1");
newH1.textContent="hello, hrj";
document.body.append(newH1);

