


var Student ={
    firstName:"Pratik",
    lastName:"Gaikwad",
    age:20,
    designation:"SDE 1",
    courseList: [],
    getStudent: function(){
        return this.firstName;

    },
    enrollCourse: function(courseName){
        this.courseList.push(courseName)
    },
    getCourseCount:function(){
        console.log(`I have enrolled in ${this.courseList.length} courses`)
    }
}

console.log(Student.lastName)
console.log(Student.age)

Student["favourite_language"]="Java";

console.log(Student.favourite_language)

//console.table(Student);
console.log(Student.getStudent("hritik"))

Student.enrollCourse("React");
Student.enrollCourse("Angular");
Student.enrollCourse("Javascript")
Student.getCourseCount();


console.table(Student);




