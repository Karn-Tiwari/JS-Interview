// //var is a function scoped variable
// function varExample() {
//   if (true) {
//     var x = 10;
//     console.log(`this var is inside of the block ${x}`);
//   }
//   console.log(`this var is outside of the block ${x}`);
// }

// varExample();

// function letExample() {
//   if (true) {
//     let x = 10;
//     console.log(`this let is inside of the block ${x}`);
//   }
//   console.log(`this let is outside of the block ${x}`);
// }

// letExample();

// function constExample() {
//   if (true) {
//     const x = 10;
//     console.log(`this const is inside of the block ${x}`);
//   }
//   x = 20; //We cant assign value in constant
//   console.log(`this const is outside of the block ${x}`);
// }

//Shadowing
// function shadowing() {
//   let x = 10;
//   console.log(`this is the value of x ${x}`);
//   if (true) {
//     let x = 20; //shadowing is allowed
//     // var x = 20;->Illegal shadowing
//     console.log(`this is the value of x inside the block ${x}`);
//   }
//   console.log(`this is the value of x outside the block ${x}`);
// }

// shadowing();

//DECLARATION
//var can be redeclared in the same scope but let and const cant be redeclared in the same scope

//INITIALIZATION
//var is initialized with undefined but let and const are not initialized

//HOISTING-> var is hoisted but let and const are not hoisted
//Javascript engine will move the declaration to the top of the scope and this phenomena is called hoisting

//It will fine because var is hoisted
// console.log(count);
// var count = 10;
//cannot access count1 before initialization
// let count1;
// console.log(count1);
// count1 = 10;
//The time between the let and const variable declaration and initialization is called Temporal Dead Zone
// console.log(count2);
// const count2 = 10;
