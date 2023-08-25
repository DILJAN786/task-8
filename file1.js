console.log("Hello World");
console.log('Hello World'); 



// Intro to  variable
// variable can store some information
// we can use this information later

// declare a variable
// var firstName = "diljan"

// //  use a variable
// console.log (firstName)

// change value
// firstName = "malikdiljan";
// console.log(firstName)

// Rules for naming variable
// you cannot strat with number 
// example ; 
// 1value (invalid)
// value1 (valid)

// var value1 = 2
// console.log (value1 ** 2)

//  you can use only underscore  _ or dollar $ symbol
//  first_name (valid)  // snake case writting
//  _firstname (invalid)
// first$name (valid)
// $firstname (invalid)

//  you cannot use spaces
//  firs Name (invalid)
//  firstName (valid)  // camleCase writting

// convention
// sart with small letter and use camelCase


// let keyword
// declare variable with let keywords

// let firstName = " diljan ali";
// console.log(firstName);


//  declare constant

// const pi = 3.14

// console.log(pi)

// string indexing
// let fisrtNme = "diljan"

//  d     i     l      j     a       n
//  0     1     2      3     4       5
//  console.log(fisrtNme[0])
//   length of string
//  fistName.length
// console.log(fisrtNme.length)

// last Index : length - 1
// console.log (fisrtNme[fisrtNme.length-1])


// trim
// toUppercase
// tolowercase
// slice

// let firstName = "diLjan"; 
// console.log(firstName.length)
// let newstring = firstName.trim();
// console.log(newstring)
// console.log(newstring.length)

// firstName = firstName.toUpperCase()
// console.log(firstName)

//   firstName = firstName.toLowerCase();
//   console.log(firstName);

// start index
// end index

// let newstring = firstName.slice(0,4)
// console.log(newstring)


// type of operator

// data type
// string 
// number
// undefind
// null
// Bigint
// symbol

// let age = 24 ;
// let firstName = "diljan" ;
// console.log(typeof age);
// console.log(typeof firstName)



// convert number to string
// age = age + "";
// console.log(typeof age)

// convert string to number
// let mystr = +"50";
// console.log(typeof mystr)


// let age =56
// age = String(age)
// console.log(typeof age)


// let age = "56"
// age = Number(age)
// console.log(typeof age)

//  string concatination

// let string1 = "malik"
// let string2 = "diljan";
// let fullname = string1 + "    " +string2;
// console.log(fullname)


//  Template string
// let age = 45
// let firstName = "diljan";
// let aboutme = `my name is ${firstName} and my age is ${age}`;
// console.log(aboutme)

// undefind
// null

// boolean and comparison operator

// booleans
// let num1 = "4 " ;
// let num2  = 6;
// console.log(num1>=num2)

// == vs ===

// console.log(num1 === num2 );

// !=  vs !==
// console.log(num1 !== num2)




// if else condition

// let age = 15;
// if(age>=17){
//     console.log ("user can play game PUBG")
// } else{
//    console.log ("user can not play this game on this value of game")
// }

// let num = 13;
// if (num%2===0){
//     console.log("even")
// }else{
//     console.log("odd")
// }

//  truthy and falsy values 

// false
// null
// undefind
// 0

//  ternary operator or condional operator

// let age = 12;
// let drink ;
// if (age>=10){
//     drink = 'cofee'
// }else{
//     drink ="milk"
// }
// console.log(drink);

// let age = 8;

// let age = 8;
// let drink = age >= 5 ? "coffe" : "milk";
// console.log(drink)

// and or operator
// let firstname = "malik"
// let age = 22;
// if(firstname[0] == `m` & age > 20){
//     console.log("your name is start with m and your age is above 18")
// }else{
//  console.log ("  the sitution is wrong two side")
// }

// let secondname = "diljan"
// let age2 = 15;
// if(secondname[0] == `m` | age2 > 20){
//     console.log("your name is start with m and your age is above 18")
// }else{
//  console.log ("  the sitution is wrong two side")
// }


// NESTED IF ELSE

// let winingNumber = 19 ;
// let userGuess = prompt("Guess a number ");

// if(userGuess == winingNumber){
//     console.log("your guess is right");

// }else{
//     if(userGuess < winingNumber){
//         console.log("to low !!!!!!!!!!!!!")

//     }else{
//         console.log("to high!!!!!!!!!!!!!")
//     }
    
// }


// if else
;
let tempindegree = 20;
if (tempindegree < 10){
    console.log("extremly hot today");
}else if(tempindegree < 16){
    console.log("it is cold today");
}else if (tempindegree < 25){
    console.log("wheather is okay");
}else{
    console.log("today very hot");
}


//  switch statement 

let day = 9;
switch(day){
case 0 :
console.log("sunday")
break;
case 1 :
console.log("monday")
break;
case 2:
console.log("tuesday")
break;
case 3:
console.log("wednesday")
break;
case 4:
console.log("trusday")
break;
case 5:
console.log("friday")
break;
case 6:
console.log("satureday")
break;
default:
console.log("invalid Day")
}


//   while loop
// let i = 0
// while(i <= 5){
//     console.log(i);
//     i++;
// }


// WHILE LOOP EXAMPLE

// let num = 100;
// let total = 0;
// let i = 0;

// while(i<10){
//     total = total + i;
//     i++;
// }
// console.log(total)

// let total = (num*(num+1))/2;
// console.log(total)

// intro to for loop

// for (let i = 0 ; i <=9;i++){
//     console.log(i)
// }

//  do while loop

// let i = 11;
// do{
//     console.log(i);
//     i++;
// }while(i<=10)




//  Intro to Arrays
// how to create Arrays


// let fruits =['mango' , 'apple' , 'grapes' ]
// console.log(typeof fruits);
// console.log(Array.isArray(fruits));


// push pop shift unshift

// push
// fruits.push("banana")
// console.log(fruits)

// pop
// fruits.pop();
// console.log(fruits)

// let poppedfruits =fruits.pop();
// console.log(fruits);
// console.log('poped fruits is', poppedfruits)


// unshift
// fruits.unshift('banana')
// console.log(fruits)


// shift

// fruits.shift();
// console.log(fruits);

//  how to clonea array
// let array1 = ['item1' , 'item2'];

// let array2 = [...array1];
// array1.push('item3');
// console.log(array1);
// console.log(array2);


// FOR LOOP IN ARRAY

// for(let i=0; i < array1.length; i++){
//     console.log(array1[i].toUpperCase());
// }
// use const for creating array

// const fruits = ['apple', 'banana'];
//   fruits.push('mango');
//   console.log(fruits)

//  while loop in array



// for of loop

// const fruits1 = ['apple ' , 'banana' , 'mango'];
// for (let fruits  of fruits1){
//     console.log(fruits)
// }


//  array destructuring



// /////    OBJECT (reference type)
// arrays are good but not sufficent for real world data
//  how to create object

// const person = {name : "diljan", age : 22}
// console.log(person);
// console.log(person.name)
 




// FUNCTION 

//    function singhappybirhtday(){
//        console.log("happy birth day to you dear guys for learning ......")
//    }

//    singhappybirhtday();

//    function twoplusfour(){
//        console.log(2+4);

//    }
//    twoplusfour();



// // function sumtwonumber(number1 , number2){
// //     return number1 + number2;
// // }
// // const returnvalue = sumtwonumber(4,5);
// // console.log(returnvalue)


// function isEven(number){
//     return number % 2 === 0;
// }
// console.log(isEven(2));

// function firstchar(anystring){
//     return anystring[ 0];
// }
// console.log(firstchar("diljan"))


// function findtarget(array, target){
//     for(let i = 0; i < array.length; i++){
//         if(array[i]===target){
//             return i;
//         }
//     }
//     return -1;
// }
// const myarray =[1,3,5,90];
// const ans = findtarget(myarray, 3);
// console.log(ans);

// expresion  function
// sumtwonumber = function (number1 , number2){
//     return number1 + number2;
// }
// const returnvalue = sumtwonumber(4,5);
// console.log(returnvalue)


// arrow function 

// sumtwonumber =  (number1 , number2) => {
//     return number1 + number2;
// }
// const returnvalue = sumtwonumber(4,5);
// console.log(returnvalue)






// CALL BACK FUNCTION
  
// function myfunc2(){
//     console.log("inside my func 2");
// }
// function myfunc(callback){
//     console.log("hello there i am a func and i can .....")
//     callback();
// }

// myfunc(myfunc2);



// fucntion returning function

// function myfunct(){
//     function hello (){
//         return "hello world"
//     }
//     return hello;
// }

// const answer = myfunct();
// console.log(answer());



// important array method
// foreach
// map
// filter
// reduce

// const numbers = [4,2,5,8];

// numbers.forEach(function(number){
//     console.log(number*2)
// })



// map method
 
// const numberss = [3,4,6,1,8];

// const squarenumber = numberss.map((numbersss)=>{
//     return numbersss * numbersss;
// })

// console.log(squarenumber);

// filter method

// const number = [1,3,2,6,4,8];

// const isOdd = function(number){
//     return number%2!==0;
// }
// const evenNumber = number.filter(isOdd);
// console.log(evenNumber);

// Reduce Method
// const usercart = [
//     {productid: 1, productname: "mobile", price: 12000},
//     { productid: 2, productname: "laptop", price: 22000},
//     { productid:3, productname:"tv", price: 15000},
// ]
// const totalamount = usercart.reduce((totalprice , currentproduct)=>{
//     return  totalprice + currentproduct.price
// },0)
// console.log(totalamount);


//         SORT METHOD
// const number = [5,9,1200,410,300];
// number.sort((a,b)=>{
//     return a-b;
// });
// console.log(number);

//   find Method





METHOD
Function inside object

// function personinfo(){
//     console.log(`person name is ${this.firstname} and age is ${this.age}`)
// }


// const person1 = {
//     firstname : "diljan",
//     age : 8,
//     about :personinfo
// }

// const person2 = {
//     firstname : "malik",
//     age : 18,
//     about :personinfo
// }

// const person3 = {
//     firstname : "ali",
//     age : 20,
//     about :personinfo
// }

// person1.about();
// person2.about();
// person3.about();








