const Person4 = {
    name: "",
    age: 0,
    greeting: function() {
        console.log("Greetings, my name is "+this.name + " and I am "+this.age+" years old") ;
    },
    salute: function() {
        console.log("Good morning!, and in case I dont see you,good afternoon, good evening and good night!");
    }
}

const student2 = Object.create(Person4);
student2.major = "Mathematics";
student2.name = "Ali";
student2.age = 20;
student2.greeting = function(){
    console.log("Hey, my name is "+this.name+" and I am studying "+ this.major);
}
student2.greeting();
student2.salute();

const professor2 = Object.create(Person4);
professor2.department = "CS";
professor2.name = "Prof Ali";
professor2.age = 50;
professor2.salute = function() {
    console.log("Good day,my name is "+this.name+" and I am in the "+this.department+" department")
}
professor2.greeting();
professor2.salute();