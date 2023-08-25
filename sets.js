// Set
// set is iterable
// set has store some data
// set has no idex based accesed
// set has own method
// set has unqiue value (no duplicated value are allowed in set)
// ordered is not granted

const number = new Set();
number.add(1);
number.add(2);
number.add(3);
number.add(4);
number.add(4);
number.add(5);
number.add(6);
number.add(6);
let num = 0;
for(let items of number){
    num++;
}
console.log(num )
if(number.has(1)){
    console.log("1 is present")
}else{
    console.log("1 is not present")
}

console.log(number);