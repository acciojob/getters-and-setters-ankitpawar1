class Person {
    constructor(name, age) {
        this._name = name;
        this._age = age;
    }
    
    get name() {
        return this._name;
    }
    
    set age(newAge) {
        this._age = newAge;
    }
}

class Student extends Person {
    study() {
        console.log(`${this.name} is studying`);
    }
}

class Teacher extends Person {
    teach() {
        console.log(`${this.name} is teaching`);
    }
}

// The following lines will make the classes global in the window scope
window.Person = Person;
window.Student = Student;
window.Teacher = Teacher;