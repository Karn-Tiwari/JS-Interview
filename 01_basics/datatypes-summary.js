//Types of datatype
/* Primitive : they are 7 type and they are call by it means we get only copy of data not a refernce
string, Number, Boolean,null,undefined,Symbol,BigInt


Reference type(Non primitive)
array, objects,functions

*/


//Question JS is statically type or dynamically type

let userEmail;

const id = Symbol("123")// it gives unique value always in symbol type

const anotherId = Symbol("123")

console.log(id===anotherId);

const heroes = ["shaktiman","naagraj","dogra"]

let myObj={
    name:"karn",
    age:22,
}

const myFuntion = function(){
    console.log("Karn Tiwari")
}
