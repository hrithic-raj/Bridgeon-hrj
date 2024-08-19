function sortarray(arr,flag){
    let big='';
    let bigar=[];
    if(flag=="True"){
        arr=arr.sort()
        for(let x of arr){
            if(x.length>big.length){
                bigar.push(x);
            }
            
        }
        console.log(bigar);
    }
    else{

    }
}

console.log(sortarray(["Apple","Watermelon","Banana"],"True"));  // [“Apple”,”Banana”,”Watermelon”]

// sortarray(["Turing", "Einstein", "Jung"], False) ➞ [“Einstein”,”Turing”,”Jung”]