let bucket = ["apple","mango","sugar ","milk"]

let myshake = new Promise((resolve,reject)=>{
         if(bucket.includes("apple") && bucket.includes("mango")&& bucket.includes("sugar") &&bucket.includes("milk")){
            resolve("this is you apple-shake")
         }else{
            reject(new Error("this is not be good so be care"))
         }
});


// how to consume promise 
 myshake.then((shsake)=>{
    console.log(`this is you shake ${shsake}`)
}).catch((nogood) => console.log(nogood));
// console.log(ready);



function myfucnc(name,callback){
 console.log(name);
 callback("Malik")
};

function mycall(yourname){
    console.log(`"this is my call back function"  ${yourname}`)
}

myfucnc("diljan",mycall);



class myclass{
    constructor(name,age){
        this.name=name,
        this.age=age
        // console.log(name)

    }
}
 let cls =new myclass("diljan",34)
 console.log(cls)