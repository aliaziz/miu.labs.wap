
const Person = {
    name: "",
    age: 0,
    greeting: function() {
        console.log("Greetings, my name is "+this.name + " and I am "+this.age+" years old") ;
    },
    salute: function() {
        console.log("Good morning!, and in case I dont see you,good afternoon, good evening and good night!");
    }
}

const student = Object.create(Person);
student.major = "Mathematics";
student.name = "Ali";
student.age = 20;
student.greeting = function(){
    console.log("Hey, my name is "+this.name+" and I am studying "+ this.major);
}
student.greeting();
student.salute();

const professor = Object.create(Person);
professor.department = "CS";
professor.name = "Prof Ali";
professor.age = 50;
professor.salute = function() {
    console.log("Good day,my name is "+this.name+" and I am in the "+this.department+" department")
}
professor.greeting();
professor.salute();