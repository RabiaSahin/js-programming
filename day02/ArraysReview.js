let elements = ["Java", 1, 2.5, true, false, "python"];

console.log(elements); //[ 'Java', 1, 2.5, true, false, 'python' ]

console.log('----------------------------------------');

let students = ['Said', 'Aleksandr', "Ayat"];

console.log(students);//[ 'Said', 'Aleksandr', 'Ayat' ]

// console.log(students[1]); //Aleksandr

console.log('---Regular ForLoop---');

for(let i = 0; i < students.length; i++){
    console.log(students[i]);
}


console.log('---For of Loop---'); // similar for each loop in Java

for(let each of students){
    console.log(each);
}


console.log('----------------------------------------');

let employees = ["Sukran", "Ahmed", "Jimmy", "Shay", "Mutlu"];

console.log(employees.length); //5
console.log(employees); //[ 'Sukran', 'Ahmed', 'Jimmy', 'Shay', 'Mutlu' ]

console.log("-------------------------");

employees.push("Isabella");

console.log(employees); //[ 'Sukran', 'Ahmed', 'Jimmy', 'Shay', 'Mutlu', 'Isabella' ]

console.log("-------------------------");

employees.unshift("Ahmed");
console.log(employees); //['Ahmed', 'Sukran', 'Ahmed', 'Jimmy', 'Shay', 'Mutlu', 'Isabella']


console.log("-------------------------");

// employees.splice(0, 1); //[ 'Sukran', 'Ahmed', 'Jimmy', 'Shay', 'Mutlu', 'Isabella' ]

employees.splice(2, 1); // keep the 1st Ahmed, but remove the second Ahmed.

console.log(employees); //[ 'Ahmed', 'Sukran', 'Jimmy', 'Shay', 'Mutlu', 'Isabella' ]
console.log("-------------------------");


employees.unshift("Ahmed");
employees.unshift("Ahmed");
employees.unshift("Ahmed");
employees.unshift("Ahmed");
employees.unshift("Ahmed");


console.log(employees);//['Ahmed', 'Ahmed','Ahmed', 'Ahmed','Ahmed', 'Ahmed','Sukran','Jimmy',
                        //'Shay', 'Mutlu','Isabella']

employees.splice(0, 6);

console.log(employees); //[ 'Sukran', 'Jimmy', 'Shay', 'Mutlu', 'Isabella' ]

console.log("-------------------------");

employees.shift();

console.log(employees); //[ 'Jimmy', 'Shay', 'Mutlu', 'Isabella' ]

employees.pop();

console.log(employees);//[ 'Jimmy', 'Shay', 'Mutlu' ]


// come back at 7:47