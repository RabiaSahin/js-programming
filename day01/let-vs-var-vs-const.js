
let school = 'CYDEO'; // variable declaration

console.log(school);

//let school = 'MIT';

// let- you can make it a local variable.
    // variable name can not be duplicated
// var- global level variable

if(true){
    var a = 100; //it is a global variable
}

console.log(a); // you can write/use it out of scope.

console.log("----------------------------------");

if(true){
    let b = 100; // local variable, can not use out of scope. 
}

//console.log(b); // it is not defined

console.log("----------------------------------");

const PI = 3.14;

/*
PI = 3.15;
console.log(PI);
*/

console.log("----------------------------------");
var country = 'Japan'; //duplicated variable names
var country = 'Korea';

console.log(country);

if(true){
    var id = "A01"
}
console.log(id); // you can write/use it out of scope.

//PLEASE DO NOT USE VAR