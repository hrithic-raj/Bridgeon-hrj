function oddishOrEvenish(num) {
	
    num=num.toString();
    let sum=0;
    for(value of num){
        sum+=parseInt(value)
    }
	if(sum%2==0){
		return "Evenish";
	}
	else{
		return "Oddish";
	}
}
oddishOrEvenish(121);