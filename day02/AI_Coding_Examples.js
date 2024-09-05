// create an array of strings and add 10 employee names to it
let employees = ["John Doe", "Jane Smith", "Alice Johnson", "Bob Brown", "Charlie Davis", "David Wilson", "Eve Thompson", "Frank Miller", "Grace Lee", "Harry Taylor"];

// print the array to console
console.log(employees);

// set the first employee name to Muhtar and last employee name to Kuzzat
employees[0] = "Muhtar";
employees[employees.length - 1] = "Kuzzat";

// print the updated array to console
console.log(employees);

console.log("----------------------------------------------------------------");

// display all the elements of the array in reversed order
for(let i = employees.length - 1; i >= 0; i--){
    console.log(employees[i]);
}

console.log("----------------------------------------------------------------");

let numbers = [100, 200, 300, 400, 5, 6, 7, 8, 9, 10];

// write a program that can display the maximum and minimum numbers from the numbers array. do not use any build-in sort functions
let maxNumber = numbers[0];
let minNumber = numbers[0];

for(let i = 1; i < numbers.length; i++){
    if(numbers[i] > maxNumber){
        maxNumber = numbers[i];
    }

    if(numbers[i] < minNumber){
        minNumber = numbers[i];
    }
}


// display the maximum and minimum
 console.log("Maximum number: " + maxNumber);
 console.log("Minimum number: " + minNumber);

 console.log("----------------------------------------------------------------");

 // write a program that can sort the numbers array in ascending order. do not use any sort functions
for(let i = 0; i < numbers.length; i++){
    for(let j = 0; j < numbers.length - 1 - i; j++){
        if(numbers[j] > numbers[j + 1]){
            let temp = numbers[j];
            numbers[j] = numbers[j + 1];
            numbers[j + 1] = temp;
        }
    }
}

console.log(numbers);

console.log("----------------------------------------------------------------");

let nums = [1,1,2,2,3,3,3,4,4,4,5,5,5,6,6,6,7,7,7];
let uniqueNums = [];

for(let i = 0; i < nums.length; i++){
    let isDuplicate = false;
    for(let j = 0; j < uniqueNums.length; j++){
        if(nums[i] === uniqueNums[j]){
            isDuplicate = true;
            break;
        }
    }
    if(!isDuplicate){
        uniqueNums.push(nums[i]);
    }
}

console.log(uniqueNums);

console.log("----------------------------------------------------------------");

/*
Create a class named Item with the following requirments:
    Attributes:
        name, price, quantity

    Methods:
        constructor: initializes all attributes
        calcPrice: calculates the price of the item
*/
class Item {
    constructor(name, price, quantity){
        this.name = name;
        this.price = price;
        this.quantity = quantity;
    }

    calcPrice(){
        return this.price * this.quantity;
    }
}


let item1 = new Item("Shoes", 100, 5);

console.log(item1);