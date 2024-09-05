// int a;

let school = "Cydeo School";

console.log(school);
console.log(typeof school); //string

console.log(school.length); //12

console.log(school[0]); //C
console.log(school[school.length-1]); //l

console.log("------------------------------");

school.toLowerCase(); 
console.log(school); //Cydeo School because it is immutable. need to assign it in a new variable

school = school.toLowerCase();
console.log(school); //cydeo school

school = school.toUpperCase();

console.log(school); //CYDEO SCHOOL


console.log("--------------------------------------");

let expectedResult = 'JavaScript';

let actualResult = 'JAVASCRIPT';

console.log(expectedResult === actualResult); //false

// ignore case sensitivity
console.log(  expectedResult.toLowerCase() === actualResult.toLowerCase()); //true

console.log("--------------------------------------");

let words = "Python Python";

words = words.replace(/Python/g, 'JavaScript'); // g: global flag

console.log(words); //JavaScript JavaScript


console.log("--------------------------------------");

let str = "abcdefg12345678hijkl123456mnop";

str = str.replace(/\d/g, '');

console.log(str); //abcdefghijklmnop

console.log("--------------------------------------");

let email = "cydeoschool@gmail.com";

let domain = email.substring(email.indexOf("@") + 1, email.lastIndexOf("."));

console.log(domain); //gmail

console.log("--------------------------------------");

let employeeName = "Said";
let employeeSalary = 100_000;

console.log(`My name is ${employeeName}, and my salary is ${employeeSalary} US dollars.`);