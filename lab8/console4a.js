function Person(name, age) {
    this.name = name;
    this.age = age;
}

Person.prototype.greeting = function(){
    console.log("Greetings, my name is "+this.name + " and I am "+this.age+" years old") ;
}

Person.prototype.salute = function() {
    console.log("Good morning!, and in case I dont see you,good afternoon, good evening and good night!");
}

const student = new Person("Ali", 12);
student.major = "Mathematics";
student.greeting = function(){
    console.log("Hey, my name is "+this.name+" and I am studying "+ this.major);
}
student.greeting();
student.salute();

const professor = new Person("Prof Ali", 50);
professor.department = "CS";
professor.salute = function() {
    console.log("Good day,my name is "+this.name+" and I am in the "+this.department+" department")
}
professor.greeting();
professor.salute();