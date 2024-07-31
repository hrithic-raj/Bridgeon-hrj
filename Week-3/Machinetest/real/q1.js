function mirror(arr){
    let xar1=[];
    let xar2=[];
    let ar=[];
    for(let i=0; i<=arr.length-1; i++){
        //console.log(arr[i]);
        xar1.push(arr[i]);
    }
    for(let j=arr.length-2; j>=0; j--){
        // console.log(arr[j]);
        xar2.push(arr[j]);
    }
    return ar=xar1.concat(xar2);
    document.getElementById('hello').innerHTML=ar;
}
console.log(mirror([0, 2, 4, 6])); // [0, 2, 4, 6, 4, 2, 0]
console.log(mirror([1, 2, 3, 4, 5])); // [1, 2, 3, 4, 5, 4, 3, 2, 1]
console.log(mirror([3, 5, 6, 7, 8])); // [3, 5, 6, 7, 8, 7, 6, 5, 3] 