console.log("default parameters");
function hello(a,b=10){
    return a +b
}
const answer = hello(4)
console.log(answer);