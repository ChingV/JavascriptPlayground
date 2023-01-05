console.log("Testing from external file");

//let, const and var
let x = "ching";
// console.log() = println.out() used to output
console.log(x);

//This section shows that javascript is dynammically read
x = "batman";
console.log(x);

console.log(polos)
var polos = 0;
console.log(polos)
let hasJob;
console.log(hasJob)

// use 'let' when you can
//use 'const' when you dont need to change
//use 'var' when it changes with the webpage

const job = "footModel";
console.log(job);




var bmi= function(height,mass){
    return mass / (height*height);
}

const john = bmi(1.95,92);
const mark = bmi(1.69, 78);
console.log(john + " <-- this is John");
console.log(mark+ " <-- This is Mark");

if(john > mark){
    console.log("john is larger than mark")
}else{
    console.log("mark is larger than john")
}

let higher = Boolean(mark>john);
console.log("Is mark's BMI higher than John's? " + higher);