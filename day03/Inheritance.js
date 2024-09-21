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

    constructor(name, age, salary){
        super(name, age);
        this.salary = salary;
    }

    teach(){
        console.log(`${this.name} is teaching`);
    }

}


let student1 = new Student("John Doe", 18);
console.log(student1); //Student { name: 'John Doe', age: 18, grade: 'High School' }
student1.eat(); //John Doe is eating
student1.study(); //John Doe is studying

let teacher1 = new Teacher("Jane Smith", 40, 60_000);
console.log(teacher1); //Teacher { name: 'Jane Smith', age: 40, salary: 60000 }
teacher1.eat();
teacher1.teach();


// come back 12:15 PM 