console.log("hello world");
function printfullname(first_name , last_name){
        function fullname(){
            console.log(`${first_name} this is my last name ${last_name}`)
        }

        return fullname;
}

let name = printfullname("diljan","ali");
// console.log(name());
name();


function hello(x){
    const a = "var A"
    const b = "var B"
    return function(){
        console.log(a,b,x)
    }

}

const ans = hello(23)
ans();