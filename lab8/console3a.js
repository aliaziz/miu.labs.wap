function Person(name) {
    this.name = name;
}

const Teacher = new Person("ALI ZIWA");
Person.prototype.teach = function(subject) {
    console.log(this.name + " is now teaching "+subject);
}

Teacher.teach("Math");