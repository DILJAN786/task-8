// block scope vs fucntion scope

// let and const are block scope
//  var is function scope

{
    let firstName="diljan"
}
console.log(firstName);

{
    var LastName="diljan"
}
console.log(LastName);

function hello(){
    if(true){
    let name = "malik";
    console.log(name)
    }
    console.log(name)
}
