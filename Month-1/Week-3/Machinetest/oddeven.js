function oddishOrEvenish(num) {
	
    num=num.toString();
    let sum=0;
    for(value of num){
        sum+= Math.round(value)
    }
	if(sum%2==0){
		console.log("Evenish");
	}
	else{
		console.log("Oddish");
	}
}
oddishOrEvenish(122);