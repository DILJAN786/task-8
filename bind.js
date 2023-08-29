const myobj ={
    firstName:"diljan",
    age:23,
    about: function(){
        console.log(`my name is ${this.firstName} and age is ${this.age}`)
    }
};

let fucn = myobj.about.bind(myobj);
fucn();