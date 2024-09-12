/*
Attributes: means what type of fields can be store into the object of this class.
    name
    salary
    gender
    ...

Methods: it usually perform some actions on the object of this class.
    work()
    ...
*/

class Employee{

    /*   constructor(){ --> //?this is no argument constructor. That means I can use this constructor to create an Employee Object.But when I try to write it console, it returns undefined
            let employee1 = new Employee(); //? created an Employee object
                console.log(employee1.employeeName); //? undefined
        } 

    you can assign data to this intance variables after creating an object. But this is //!NOT efficient way to assign instance variables. 

        constructor(){ //? No argument constructor.
        let employee1 = new Employee(); //? created an Employee object
        employee1.employeeName = 'John Wick'; //? assigned the value to employeeName variable
                console.log(employee1.employeeName); //? John Wick
        }
    */

    constructor(employeeName = 'Unknown', employeeSalary = 50_000){
        this.employeeName = employeeName;
        this.employeeSalry = employeeSalary;
    }
    //this.employeeName; --> declare the instance variables in the constructor body with this keyword

    work(){
        console.log(`${this.employeeName} is working`);
    }

}


let employee1 = new Employee('John Wick', 100_000);

console.log(employee1.employeeName); // John Wick
console.log(employee1.employeeSalry); // 100000
console.log(employee1); // Employee { employeeName: 'John Wick', employeeSalry: 1000

let employee2 = new Employee();

console.log(employee2); // Employee { employeeName: 'Unknown', employeeSalry: 50000 }

let employee3 = new Employee("Sukran");

console.log(employee3); // Employee { employeeName: 'Sukran', employeeSalry: 5000

console.log('------------------------------------------');

employee3.work(); // Sukran is working

// this is the simulate the overloading concept in Java. Same method name (Employee) with different arguments. But in JavaScript, we don't have overloading concept. we just created different objects (employee1, employee2, employee3) by using the same method name (Employee) with different arguments. 
