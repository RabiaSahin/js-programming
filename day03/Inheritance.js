class Person{
    constructor(name = 'Unknown', age = 0){
        this.name = name;
        this.age = age;
    }

    eat(){
        console.log(`${this.name} is eating`);
    }

}

class Student extends Person{

    // create constructor
    constructor(name, age, grade = 'High School'){
        super(name, age);
        this.grade = grade;
    }

   study(){
        console.log(`${this.name} is studying`);
   }
}

class Teacher extends Person{

    constructor(name, age, salary = 60_000){
        super(name, age);
        this.salary = salary;
    }

    teach(){
        console.log(`${this.name} is teaching`);
    }

}


let student1 = new Student("John Doe", 18);
console.log(student1);
student1.eat();
student1.study();

let teacher1 = new Teacher("Jane Smith", 40);
console.log(teacher1);
teacher1.eat();
teacher1.teach();


// come back 12:15 PM 