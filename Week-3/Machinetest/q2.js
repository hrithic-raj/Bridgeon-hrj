function koya(str){
    let value=str.split('');
    let total=0;
    for(let i =0; i<=str.length-1; i++){
        if(value[i]=="i"){
            total+=1;
        }
        else if(value[i]=="d"){
            total-=1;
        }
        else if(value[i]=="s"){
            total*=total;
        }
    }
    return total;
}
console.log(koya("iiss"));