//Singleton

//Object literals
const mySym = Symbol("key1")
const jsUser = {
    name:"Karn",
    age:23,
    [mySym]:"key1",// ye hai symbol ka syntax
    isMarried:true,
    location:"Ayodhya",
    "isLoggedIn":false,
    lastLoginDays:["Monday","Saturday"],
    email:"karntiwari@gmail.com"
}
// console.log(jsUser.email)
// console.log(jsUser["email"])// object k element ko . se bhi access kar sakte ahi aur square bracket k ander " " se bhi
// console.log(jsUser["isLoggedIn"])
// console.log(jsUser[mySym])


// Object.freeze(jsUser)// freeze method object ki sari value ko lock kar dega uske baad agar koi uske element ko change karega to wo nhi change hoga aur koi error bhi nhi ayega


jsUser.email ="shivam@chatgpt.com"
console.log(jsUser)

jsUser.greeting = function(){
    console.log("Hellow js user i am a function")
}

jsUser.greetingTwo = function(){
    console.log(`Hello js user ,I am a ${this.name}`)// this is refer to the object and left part we will discuss later
}
console.log(jsUser.greeting())
console.log(jsUser.greetingTwo())

