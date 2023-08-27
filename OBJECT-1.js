let myobj = {
    firstName: function () {
        return console.log(`my name is ${this.name} and age is ${this.age}`)
    },
    about: function () {
        return this.age >= 18;
    }
}



function myfunc(name, age) {
    let myob = {}
    myob.name = name;
    myob.age = age;
    myob.firstName = myobj.firstName;
    myob.about = myobj.about;
    return myob
}
let user = myfunc("diljan", 23);
let user1 = myfunc("malik", 24);
user1.firstName()
console.log(user.about())

// let users = user.Name();
// console.log(users);