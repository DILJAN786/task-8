console.log("param destructure");

const obj = {
    firstName:"diljan",
    gender:"male"
}

function hello({firstName,gender}){
    console.log(firstName);
    console.log(gender);
}

 hello(obj);
// console.log(func)