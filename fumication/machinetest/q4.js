function eo(arr){
    let od=[];
    let ev=[];
    arr.forEach(val=>{
        if(val%2==0){
            ev.push(val);
        }
        else{
            od.push(val);
        }
    });
    if(od.length<ev.length){
        return od[0]+"(the only odd number)"
    }
    else{
        return ev[0]+"(the only even number)"
    }


    // var ev=arr.filter(val=> val%2==0);
    // var od=arr.filter(val=> val%2!==0);
    // return (ev.length==1)?ev[0]:od[0];

}
console.log(eo([2, 4, 0, 100, 4, 11, 2602, 36]));
console.log(eo([160, 3, 1719, 19, 11, 13, -21]));
