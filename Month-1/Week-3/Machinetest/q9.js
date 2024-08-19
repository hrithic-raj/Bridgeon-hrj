function koya(arr){
    let arrr=[];
    let ar=[];
    for(let x of arr){
        arrr.push(x.quantity * x.price);
    }
    ar=arrr.reduce((total,value) => total+value);
    return ar;
}
console.log(koya([
    { product: "Milk", quantity: 1, price: 10 }
    ]));
console.log(koya([
    { product: "Milk", quantity: 3, price: 10 },
    { product: "Biscuit", quantity: 1, price: 20 }
    ]));
console.log(koya([
    { product: "Milk", quantity: 1, price: 10 },
    { product: "Eggs", quantity: 12, price: 5 },
    { product: "Bread", quantity: 2, price: 20 },
    { product: "Cheese", quantity: 1, price: 30 }
    ]));