console.log("Hello world");
console.log(`Hello World`);


//  INTRODUCTION TO VARIABLES

// var firstname = "malikali";
// console.log(firstname);
// firstname = "diljan"
// console.log(firstname);


// rules for naming variable

// you can not start with Number;
// you can use only use underscore _ or dollar Symbol;
// start with small letter and use camelCase;
// you can not use space; 
// convention;
// start with small letter and use camelcase;


//  LET KEYWORD

// let firstName = "dilajan";
// console.log(firstName);


// CONSTANTS

// const pi = 3.14;
// console.log(pi);


// STRING INDEXING

// let firstname = "diljan";
// console.log(firstname[3]);
// console.log(firstname.length);
// console.log(firstname[firstname.length-1]);


// TRIM()
// toUppercase
// toLowercase
// slice

// let firstname1 = "dilJan";

// console.log(firstname1.length);
// let newstring = firstname1.trim();
// console.log(newstring);
// console.log(newstring.length);

// firstname1 = firstname1.toUpperCase();
// console.log(firstname1);

// firstname1 = firstname1.toLowerCase();
// console.log(firstname1);

// let newstring = firstname1.slice(0,4);
// console.log(newstring);


// typeof operator

// let age = 22
// let firstName = "diljan"

// console.log(typeof age);
// console.log(typeof firstName);

// convert number  to string

// age = age + "";
// console.log(typeof age);

// convert string to number

// let mystr = +"34";
// console.log(typeof mystr);

// let age = 18;
// age = Number(age);
// console.log(typeof age);


// string concatenation

// let string = "diljan";
// let string1 = "ali";

// let fullname = string + "   " + string1
// console.log(fullname);


// template string

// let age = 22;
// let name = "diljan";

// let aboutme = "my name is" +" "+ name + " "+ "and my age is "+ age;
// let aboutme = `my name is ${name} and age is ${age}`
// console.log(aboutme);

// undefind
// null
// bigint


// boolean and comparison operator

// let num1 = 7;
// let num2 = 7;
// console.log(num1>=num2);

//  == vs ===
// console.log(num1 == num2);

//  != vs !==


// truthy and falsy values

// let firstName = -1
// if(firstName){
//     console.log("firstname");
// }else{
//     console.log("falsy value");
// }



// if and else condition

// let age = 17;
//  if(age>=18){
//      console.log("user can play game");
//  }else{
//      console.log("user can play mario");
//  }

//  let num = 3;
//  if(num%2==0){
//      console.log("even");
//  }else{
//      console.log("odd");
//  }


// ternary operator / condional operators

// let age = 15;
// let drink;

// if(age>=20){
//     drink="cofee";
// }else{
//     drink="milk"
// }
// console.log(drink);

// let age = 7;
// let drink = age >= 8 ? "cofee" : "milk";
// console.log(drink);


//  and or operators
// let firstname= "diljan";
// let age = 22;
// if (firstname[0]== "8" && age >= 18){
//     console.log("your age is above 18 and start with" );
// }else{
//     console.log("wrong statements");
// }

// let firstname= "diljan";
// let age = 22;
// if (firstname[0]== "8" || age >= 18){
//     console.log("your age is above 18 and start with" );
// }else{
//     console.log("wrong statements");
// }


// nested if else

// let winningnumber = 19
// let userguess = prompt("guess a number");
// if (userguess=== winningnumber){
//     console.log("your guess is right");
// }else{
//     if(userguess < winningnumber){
//         console.log("to low");
//     }else{
//         console.log("to high");
//     }
// }


// if
// else if
// else


// let temindegree = 33;
// if(temindegree < 0){
//     console.log("exterml cold outside")
// }else if(temindegree < 16){
//     console.log("it is cold today");
// }else if(temindegree < 25){
//     console.log("wheater is okay")
// }else if(temindegree < 35){
//     console.log("lets go for swim")
// }else{
//     console.log("to hot")
// }


// switch statement

// let day = 8
// switch(day){
//     case 0:
//     console.log("sunday")
//       break;
//     case 1:
// console.log("monday")
//     break ;
// case 2:
// console.log("tuesday")
// break;
// case 3:
// console.log("wednesday")
// break;
// case 4:
// console.log("thrusday")
// break;
// case 5:
// console.log("friday")
// break;
// case 6:
// console.log("satureday")
// break;
// default:
//     console.log("invalid day")

// }



//   while loop

// let i = 0;
// while(i<=3){
//     console.log(i);
//     i++;
// }


// while loop example
// let num =10;
// let total = 0;
// let i = 0
// while(i<=100){
//     total = total + i;
//     i++;
// }
// console.log(total);

// for loop

// for(let i = 0; i <=9; i++){
//     console.log(i);
// }

// for loop example
// let total = 0
//  let num =10;
//  for (let i =1 ; i<=num; i++){
//      total = total +i;
//  }
//  console.log(total);

// break keyword and continue key word

// for (let i =1 ; i<= 10; i++){
//     if(i===4){
//         break
//     }
//     console.log(i);
// }


// do while loop

// let i =10;
// do{
//     console.log(i);
//     i++;
// }while(i<=9)


// Intro to arrays >>>>> reference type

// let fruits = ['apple', 'mango', 'grapes'];
// console.log(fruits[1]);
// fruits[1]='banana'
// console.log(fruits);

// array push pop
//   array shift unshift

// fruits.push('narial');
// fruits.pop();
// fruits.unshift("coconut");
// fruits.shift();
// console.log(fruits); 


// how to clone array;
//  how to concatinate arrays;

// let array1 = ["item1", "item2"];
// let array2 = array1.slice(0).concat(["item3","item4"])
// array1.push("item3");
// console.log(array1===array2); 
// console.log(array1);
// console.log(array2);

// second method

// let array1 = ["item1", "item2"];
// let array2 = [].concat(array1);
// array1.push("item3");
// console.log(array1===array2);
// console.log(array1);
// console.log(array2);

// new ways
// spread operator

// let array1 = ["item1", "item2"];
// let array2 = [...array1]
// array1.push("item3");
// console.log(array1===array2);
// console.log(array1);
// console.log(array2);


// FOR LOOP IN ARRAY
// let fruits = ["apple","mango","grapes","banana"];

// for (let i=0; i < fruits.length; i++){
//     console.log(fruits[i].toUpperCase())
// }


// use const for creating array

// const fruits = ["apple","mango","grapes","banana"];
// fruits.push("coconut");
// console.log(fruits);


// while loop in array

// const fruits = ["apple","mango","grapes","banana"];
// let i = 0
// while(i<fruits.length){
//     console.log(fruits[i]);
//     i++
// }


// for of  loop in arrays

// const fruits = ["apple","mango","grapes",];
// for(let fruit of fruits){
//     console.log(fruit);
// }

// array destructureing

// const myarray  = ["value1", "value2", "value3", "value4"];
// let [myvar1,  ,myvar2]=myarray
// console.log("value of myvar1",myvar1);
// console.log("value of myvar2",myvar2);


// object >>> array are good but not shufficient for real
// world data >> object store key value pairs::::::::

// const person = {name:"harshit",age:22};
// console.log(person);

// const person ={
//     name: "harshit",
//     age:22,
//     hobbies: ["guitar", "sleeping", "listening music"]
// }
// console.log(person);
// console.log(person.hobbies);
// console.log(person["hobbies"]);

// diference between dot and bracket notation
// const key = "email";
// const person = {
//     name: "diljan",
//     age:22,
//     "person hobbies":["guitar","sleeping","listening"]
// }

// person[key]="malikdiljan6@gmail.com"
// console.log(person);

// how to iterate object

// const person = {
//     name: "diljan",
//     age:22,
//     "person hobbies":["guitar","sleeping","listening"]
// }
// for in loop

// for (let key in person){
//     console.log(`${key}:${person[key]}`)
// }

// computed properties

// const key1 ="objkey1";
// const key2 = "objkey2";

// const value1 = "myvalue1";
// const value2 = "myvalue2";

// const obj ={
//    [key1] : value1,
//    [key2] : value2
// }
// console.log(obj)


// spread operators in object

// const obj1 ={
//     key1:"value1",
//     key2:"value2"
// };
// const obj2 ={
//     key1:"valueunique",
//     key3:"value3",
//     key4:"value4",
// };
// const newobject ={ ...obj1,...obj2,key69:"value23"};
// console.log(newobject)


// object destrutureing

// const band ={
//     bandname: "led zippline",
//     famoussong:"kal kach de kuri",
//     year:2022,
//     anothersong:"kaly de lebas de show kenan a kuri"

// };
// let {bandname , famoussong ,...AbortSignal}=band;
// console.log(bandname);
// console.log(famoussong);
// console.log(AbortSignal);


// nested desrutureing

// const users =[
//      {userid:1, firstname:"diljan",gender:"male"},
//      {userid:2,firstname:"malik",gender:"male"},
//      {userid:3,firstname:"ali",gender:"female"},
// ]
// const[{firstname: user1},,{gender}] =users;
// console.log(user1);
// console.log(gender);


// functions

// function singmy(){
//     console.log("happy birthday to you ......");

// }
// function twoplus(){
//          return 2+4;

// }
// const twovalues = twoplus();
// console.log(twoplus());
// console.log(twovalues);

// function sumoftwo(number1,nubmer2){
//     return number1 + nubmer2;
// }
// const returnvalues = sumoftwo(10,23);
// console.log(returnvalues);

// function iseven (number){
//     if(number%2 ===0){
//         return true;
//     }else{
//         return false;
//     }
// }
// console.log(iseven(5))


// function expression

// const myfunction = function(){
//     console.log("happy birthday to you ......");

// }

// arrow function

// const swimming=()=>{
//        console.log("hello world")
// };


// hoisting


// function inside function 


// lexical scope


// const myvar = "value1";

// function myapp(){
     
//             function myfunc(){
//                 const myfunct2 = () =>{
//                     console.log("inside myfunc",myvar);
//                 }
//                 myfunct2();
//             }
// console.log(myvar);
// myfunc();
// }
// myapp();

// block scope vs function scope

// let and const are block scope
// var is function scope



// default parameter

// function addtwo(a,b=0){
//     return a +b;
// }
// const ans = addtwo(2,12)
// console.log(ans);


// rest parameter

// function addall(...number){
//     let total = 0;
//     for(let numbers of number){
//         total = total + numbers;
//     }
//     return total;
// }
// const ans = addall(4,5,6,5);
// console.log(ans);


//  param destructuring



// callback function

// function myfunc(){
//     console.log("inside my function")
// }

// function myfunct2(a){
//     console.log("hi there i am working on js!!!!!!!!!!!!")
//     a();
// }
// myfunct2(myfunc);


// function returning function

// function myfunc(){
//     function hello(){
//         return "hello world"
//     }
//     return hello;
// }
// const anser = myfunc();
// console.log(anser());


// important array method

// foreach
// filter
// map
// reduce

// const number =[2,3,4,5]
// function myfunc(number,index){
//     console.log(`index is ${index} number is ${number*2}`)
// }
// number.forEach(myfunc);
    

// const users = [
//     {firstname: "diljan", age : 23},
//     {firstname: "malik", age : 22},
//     {firstname: "ali", age : 13},
//     {firstname: "hussain", age : 25},
    
// ]

// users.forEach(function(user){
//     console.log(user.firstname);
// })

// map method

// const number = [3,5,7,9];

// const square = function (number){
//     return number * number;
// }

// const squarenumber = number.map(square);
// console.log(squarenumber);

// FILTER

// const numbers = [1,3,2,4,6,8];

// const evennumber = numbers.filter((number)=>{
//     return number %2 ===0;
// });
// console.log(evennumber);

//          reduce

// const usercart = [
//     {productid:1, productname:"mobile",price:12000},
//     {productid:12, productname:"computer",price:13000}

// ]
// const totalammount = usercart.reduce((totalprice,currentproduct)=>{
//     return totalprice + currentproduct.price;
// },0)
// console.log(totalammount);


//         sort method

// const numbers = [5,9,1200,410,3000];
// numbers.sort((a,b)=>{
//     return a - b;
// });
// console.log(numbers);


//    find method

// const myarray = ["hello", "cat", "dog", "lion"]
// function islength(string){
//     return string.length === 3;
// }
// const ans = myarray.find(islength);
// console.log(ans);


//   every method

//   const number = [2,4,6,8,10];
//   const ans = number.every((numbers)=>numbers%2===0);
// console.log(ans);


// some method


// fill method

// const myarray = new Array(10).fill(-1);
// console.log(myarray);


//     splice method

// const myarray = ['item1', 'item2', 'item3'];
// myarray.splice(1,1,'insert value');
// console.log(myarray);


//    Sets (it is iterable)

// const number = new Set([1,2,3,4,5,6]);
// console.log(number);


// const myaaray =[1,2,3,4,5,6,5,6]
// const unique = new Set(myaaray);
// console.log(unique);
// console.log(myaaray);


//    MAP

// const person = new Map();
// person.set('firstname', 'harshit');
// person.set('age',7);
// person.set(1,'one');
// person.set([1,2,3],'one three four');
// console.log(person);
// for (let key of person.keys()){
//     console.log(key,typeof key);
// }


// const person1 = {
//     id:1,
//     Firstname:"malikali"
// }
// const extrainfo = new Map()
// extrainfo.set(person1,{age:12,gender:"male"});
// console.log(person1.id);
// console.log(extrainfo.get(person1));


// //    CLONE USING OBJECT.ASSIGN




// optional   chaining

// const user = {
//     firstname:"diljan"
//     // address:{housenumber : '1234'}
// }
// console.log(user?.firstname)
// console.log(user.address?.housenumber);



// methods

// function inside object

function personinfo(){
    console.log(`perosne name is ${this.FirstName} and age is ${this.age}`)

}

const person1 = {
    FirstName:"diljan",
    age:23,
    about: personinfo
}
const person2 ={
    FirstName :'malik',
    age:20,
    about:personinfo
}
person1.about();
person2.about();





