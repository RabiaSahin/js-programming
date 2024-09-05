let elements = ["Java", 1, 2.5, true, false, "python"];

console.log(elements);

console.log('----------------------------------------');

let students = ['Said', 'Aleksandr', "Ayat"];

console.log(students);

// console.log(students[1]);

for(let i = 0; i < students.length; i++){
    console.log(students[i]);
}


console.log('----------------------------------------');

for(let each of students){
    console.log(each);
}


console.log('----------------------------------------');

let employees = ["Sukran", "Ahmed", "Jimmy", "Shay", "Mutlu"];

console.log(employees.length);
console.log(employees);

console.log("-------------------------");

employees.push("Isabella");

console.log(employees);

console.log("-------------------------");

employees.unshift("Ahmed");
console.log(employees);


console.log("-------------------------");

// employees.splice(0, 1);
employees.splice(2, 1);

console.log(employees);

console.log("-------------------------");


employees.unshift("Ahmed");
employees.unshift("Ahmed");
employees.unshift("Ahmed");
employees.unshift("Ahmed");
employees.unshift("Ahmed");


console.log(employees);

employees.splice(0, 6);

console.log(employees);

console.log("-------------------------");

employees.shift();

console.log(employees);

employees.pop();

console.log(employees);


// come back at 7:47