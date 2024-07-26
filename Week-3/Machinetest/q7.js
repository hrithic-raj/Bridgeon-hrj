function koya(arr){
    let arrr=[];
    arrr=arr.map(subarr => Math.max(...subarr))
    return arrr
}
console.log(koya([[4,2,7,1], [20,70,40,90], [1,2,0]]));
console.log(koya([[-34,-54,-74], [-32,-2,-65], [-54,7,-43]]));