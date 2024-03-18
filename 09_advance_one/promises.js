// const promiseOne = new Promise(function (resolve, reject) {
//   // Promise should be capitalized
//   //Do an async task
//   //DB calls
//   //cryptography
//   //Network calls
//   setTimeout(function () {
//     console.log("Async task is completed");
//     resolve();
//   }, 1000); // The timeout duration should be inside the setTimeout function
// });

// promiseOne.then(function () {
//   console.log("After completion of promise, do this task");
// });

// new Promise(function (resolve, reject) {
//   setTimeout(function () {
//     console.log("Async task Two is completed");
//     resolve();
//   }, 1000);
// }).then(function () {
//   console.log("After completion of promise number 2, do this task");
// });

// const promiseThree = new Promise(function (resolve, reject) {
//   setTimeout(function () {
//     resolve({ userName: "Karn Tiwari", email: "Karn@gmail.com" });
//   }, 1000);
// });

// promiseThree.then(function (user) {
//   console.log("User is ", user);
// });

// const promiseFour = new Promise(function (resolve, reject) {
//   setTimeout(function () {
//     let error = true;
//     if (!error) {
//       resolve({ userName: "Karn Tiwari", password: "12345" });
//     } else {
//       reject("User not Found");
//     }
//   }, 1000);
// });

// promiseFour
//   .then((user) => {
//     console.log(user);
//     return user.userName;
//   })
//   .then((userName) => {
//     console.log(userName);
//   })
//   .catch(function (error) {
//     console.log(error);
//   })
//   .finally(function () {
//     console.log("Promise is completed");
//   });

// const promiseFive = new Promise(function (resolve, reject) {
//   setTimeout(function () {
//     let error = false;
//     if (!error) {
//       resolve({ userName: "Javascript", password: "12345" });
//     } else {
//       reject("ERROR: JS went wrong");
//     }
//   }, 1000);
// });

// async function consumePromiseFive() {
//   try {
//     const response = await promiseFive;
//     console.log(response);
//   } catch (error) {
//     console.log(error);
//   }
// }

// consumePromiseFive();

// async function getAllUsers() {
//   try {
//     const response = await fetch("https://jsonplaceholder.typicode.com/users");
//     const data = await response.json();
//     console.log(data);
//   } catch (error) {
//     console.log("Error: ", error);
//   }
// }

// getAllUsers();

fetch("https://jsonplaceholder.typicode.com/users")
  .then((response) => {
    return response.json();
  })
  .then((data) => {
    console.log(data);
  })
  .catch((error) => {
    console.log("Error: ", error);
  });
