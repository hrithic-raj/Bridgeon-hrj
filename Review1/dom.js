let first=document.getElementById('first');
let second=document.getElementById('second');
let text=document.getElementById('text');
let modify=document.getElementById('modify');
let bg=document.getElementById('bg');
let body=document.body;

//toggle button color

function firstfun(){
    if(first.style.backgroundColor="red"){
        first.style.backgroundColor="yellow"
        second.style.backgroundColor="red"
    }
    else{
        first.style.backgroundColor="red"
        second.style.backgroundColor="yellow"
    }

    //create text

    let newtext = document.createElement('h1')
    newtext.textContent="New Text";
    newtext.setAttribute('class','text');
    newtext.setAttribute('id','newtext');
    body.appendChild(newtext);
}
function secondfun(){
    if(second.style.backgroundColor="yellow"){
        first.style.backgroundColor="red"
        second.style.backgroundColor="yellow"
    }
    else{
        first.style.backgroundColor="yellow"
        second.style.backgroundColor="red"
    }
    
    //delete text
    let newtext1=document.getElementById('newtext');
    if(newtext1){
        body.removeChild(newtext1);
    }else{
        alert("No element to delete")
    }
}

//modify text

let original="The text";
let changed="Text Changed";
modify.addEventListener('click',()=>{
    if(text.textContent==original){
        text.textContent='Text Changed';
        text.style.color="pink"
    }
    else{
        text.textContent='The text';
        text.style.color="aqua"
    }
})

//BG change

let bg1='url("pc2.jpg")';
let bg2='url("pc3.png")';
bg.addEventListener('click',()=>{
    if(body.style.backgroundImage===bg1){
        body.style.backgroundImage=bg2;
    }
    else{
        body.style.backgroundImage=bg1;
    }
})
