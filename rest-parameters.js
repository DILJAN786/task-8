console.log("rest perameters");

function hello(a,b,...c){
    console.log(`a is ${a}`);
    console.log(`b is ${b}`);
    console.log(`c is ,`, c);
}
hello(2,3,4,5,6,7,8,9);