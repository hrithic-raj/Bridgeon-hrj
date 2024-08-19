const person={
    firstName : 'hrj',
    lastName : 'gamer',
    age : 21,
    fullName : function(){
        return this.firstName + ' ' + this.lastName;
    }
};
console.log(person.fullName());
