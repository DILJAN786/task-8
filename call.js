function name(first_name,last_name){
           console.log(`my nmae is ${this.first_name} and last name is ${this.last_name}`)
}

let fnmae = {
    first_name : "diljan",
    last_name : "ali"
}

let fun= name.bind(fnmae)
fun()