//Map, Filter, Reduce
//Map array method returns completely new array by applying a function on each element of the array

// const arr = [1, 2, 3, 4, 5, 6, 7, 8, 9];

// const newArr = arr.map((num, i, arr) => {
//   return num * 2;
// });

// console.log(newArr);

//Filter array method returns a new array by filtering out the elements based on the condition

// const arr = [1, 2, 3, 4, 5, 6, 7, 8, 9];

// const moreThanFive = arr.filter((num, i, arr) => {
//   return num > 5;
// });

// console.log(moreThanFive);

//Reduce array method returns a single value by applying a function on each element of the array

// const arr = [1, 2, 3, 4, 5, 6, 7, 8, 9];

// const sumOfArr = arr.reduce((acc, curr, i, arr) => {
//   return acc + curr;
// }, 0);
// console.log(sumOfArr);
//If we dont provide the initial value then the first element of the array will be the initial value

//POLYFILLS
//polyfill for map

//prototype is adding function myMap to the method of Array
// Array.prototype.myMap = function (cb) {
//   let temp = []; //Map always return a new arary thats why we are using temp empty array here
//   for (let i = 0; i < this.length; i++) {
//     temp.push(cb(this[i], i, this)); //this[i] is the element of the array, i is the index of the array and this is the array
//   }
//   return temp;
// };

// const arr = [1, 2, 3, 4, 5, 6, 7, 8, 9];
// //I am using custom myMap instead of map
// const newArr = arr.myMap((num, i, arr) => {
//   return num * 2;
// });

//Custom Filter by polyfill

// Array.prototype.myFilter = function (cb) {
//   let temp = [];
//   for (let i = 0; i < this.length; i++) {
//     if (cb(this[i], i, this)) {
//       temp.push(this[i]);
//     }
//   }
//   return temp;
// };

// const arr = [1, 2, 3, 4, 5, 6, 7, 8, 9];
// const moreThanFive = arr.myFilter((num, i, arr) => {
//   return num > 5;
// });

// console.log(moreThanFive);

//Custom Reduce by polyfill

// Array.prototype.myReduce = function (cb, initialValue) {
//   let acc = initialValue;
//   for (let i = 0; i < this.length; i++) {
//     acc = cb(acc, this[i], i, this);
//   }
//   return acc;
// };

// const arr = [1, 2, 3, 4, 5, 6, 7, 8, 9];
// const sumOfArr = arr.reduce((acc, curr, i, arr) => {
//   return acc + curr;
// }, 0);

// console.log(sumOfArr);

//This difference between map and forEach

// const arr = [1, 2, 3, 4, 5, 6, 7, 8, 9];

// const mapResult = arr.map((num, i, arr) => {
//   return 2 * num;
// });

// const forEachResult = arr.forEach((num, i, arr) => {
// //   return 3 * num;
//   arr[i] = num + 7;
// });

// console.log(mapResult);//It will return new Array by modifying each element of an array

// console.log(forEachResult);//
// console.log(arr);//It wont return anything thats why it will give the undefined but we can modify the original array by using index 


let students = [
    {name:"Karn",rollNum:30,marks:80},
    {name:"shivam",rollNum:35,marks:69},
    {name:"Harsh",rollNum:29,marks:45},
    {name:"Abhisha",rollNum:2,marks:55},
];

//QUESTION-:1 map,filter and reduce - o/p based questions

// let result = [];
// for(let i = 0; i<students.length; i++){
//     result.push(students[i].name.toUpperCase());
// }
// console.log(result);
// let results = students.map((stu)=>{
//     return stu.name.toUpperCase();
// })
// console.log(results)




//QUESTION-:2 Return only details of those who scored more than 69 marks

// let results = students.filter((stu)=>{
//     return stu.marks>60;
// }).map((stu)=>{
//     return stu;
// })

// console.log(results);




//QUESTOIN-:3 More than 60 marks and rollNumber greater than 15

// let results = students.filter((stu)=>{
//     return stu.marks>60;
// }).filter((stu)=>{
//     return stu.rollNum>15;
// })

// console.log(results);


//QUESTION-:4 Sum of marks of all students;

let result = students.reduce((acc,curr)=>{return acc+curr.marks},0);
console.log(result);

//QUESTION 5-: Return only names of students who scored more than 60