function koya(arr){
    let arrr=[];
    let big = '';
    
    arr.forEach(value =>{
        if(value.length>big.length){
            
            big=value;
        }
    })
    return big;
}
console.log(koya(['apple', 'banana', 'cherry', 'blueberry']));