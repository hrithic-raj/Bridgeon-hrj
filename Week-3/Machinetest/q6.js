let pattern='';
for(let i=1; i<=5; i++){
    for(let j=5; j>=i; j--){
        pattern+=""+j;
    }
    pattern+='\n';
}
console.log(pattern);