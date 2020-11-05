const Person = {
    name: ''
}

const Teacher = Object.create(Person);
Teacher.name = 'ALI ZIWA';
Teacher.teach = function(subject) {
    console.log(this.name + " is now teaching "+ subject);
}

Teacher.teach("Math");