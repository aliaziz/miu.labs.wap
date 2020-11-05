const Person2 = {
    name: ''
}

const Teacher2 = Object.create(Person2);
Teacher2.name = 'ALI ZIWA';
Teacher2.teach = function(subject) {
    console.log(this.name + " is now teaching "+ subject);
}

Teacher2.teach("Math");