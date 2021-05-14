const Student = function(firstname,lastname,age){
    this.firstname= firstname
    this.lastname=lastname
    this.age=age

    this.getMyFirstName = function(){
        console.log(this.firstname);
    }
}

// Using Prototype we can create a new method for the class
Student.prototype.getMyLastName = function() {
    console.log(this.lastname);
}

var pratik =new Student("Pratik","Gaikwad",21);
pratik.getMyFirstName();
pratik.getMyLastName();





// using prototype on array
var array= [1,2,3,4,5,6];

Array.prototype.getEven = function() {
     return array.filter((e) => e%2===0);
}

console.log(array.getEven());



// create a object using Object because all the objects are instance of Objects
var studentInfo = {
    name : "",
    
    getMyName : function (){
        console.log(this.name);
    }
}
var Pratik= Object.create(studentInfo);
Pratik.name = "pratik";
Pratik.getMyName();

