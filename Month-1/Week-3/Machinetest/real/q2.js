
function joinDigits(n){
    str='';
    arr=[];
    for(let i=1; i<=n; i++){
        str+=i;
    }
    arr=str.split('');
    return arr.join('-');

}

console.log(joinDigits(11)); // "1-2-3-4-5-6-7-8-9-1-0-1-1"