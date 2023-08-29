// Call

const myobj ={
    firstName:"diljan",
    age:23,
    about: function(){
        console.log(`my name is ${this.firstName} and age is ${this.age}`)
    }
};

// console.log(myobj.about.call(myobj));
myobj.about();

let myobj2 ={
    firstName:"malik ali",
    age:25
}

myobj.about.call(myobj2);
//  myobj.call(myobj2)
// console.log(name)