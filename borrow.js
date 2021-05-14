
// Borrow a Method from Another Object
var Student={
    name:"Pratik",
    surname:"Gaikwad",
    getFullName : function(){
        console.log(`The full name is ${this.name} ${this.surname}`);
    }
}

var Student1={
    name:"Mrunal",
    surname:"Gaikwad",
}

// var Student1_info=Student.getFullName.bind(Student1);
// Student1_info();

Student.getFullName.call(Student1);