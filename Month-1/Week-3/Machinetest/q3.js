function koya(arr){
    let sum=true;
    let xarr=[];
    let length=arr.length;
    for(let i=0; i<=length-1; i++){
        if(arr[i]=="bridgeon"){
            if(sum==true){
                sum=false;
            }
            else{
                sum=true;
            }
        }
        xarr.push(sum);
    }
    return xarr;
}
console.log(koya(["bridge", "bridgeon", "on"]));
console.log(koya(["bridgeon", 10101, 3.14, 53, "bridgeon"]));