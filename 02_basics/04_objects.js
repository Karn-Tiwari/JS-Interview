// const tinderUser = new Object()// It is a singleton object
const tinderUser  = {}// It is non-singleton object

 tinderUser.id = "123abc"
 tinderUser.name = "sam"
 tinderUser.isLoggedIn = false

// console.log(tinderUser)
const regularuser = {
    email:"someone@gmail.com",
    fullName:{
        firstName : "karn",
        lastName : "tiwari"
    }
}
console.log(regularuser?.fullName?.firstName)
 
const obj1 = {1:"a",2:"b"}
const obj2 = {3:"c",4:"d"}

// const obj3 = Object.assign({},obj1,obj2)
const obj3 = {...obj1,...obj2}
console.log(obj3)

const course = {
    courseName:"js in hindi",
    price:"999",
    courseInstructor:"karn"
}

// course.courseInstructor
// const {courseInstructor} = course;
// console.log(courseInstructor)
const {courseInstructor:instructor} = course;
console.log(instructor)
