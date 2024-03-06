//Array
const myArr = [0,1,2,3,4,5,6]
const myHeroes = ["Shaktiman","Nagraj"]

const myArr1 = new Array(1,2,3,4,5)
console.log(myArr[1])

//Array methods

myArr.push(10)
myArr.pop()
myArr.unshift(9)//ye starting me insert kar dega lekin costly operation ahi

myArr.shift()//starting ka element ko delete kar dega

console.log(myArr.includes(20))
console.log(myArr.indexOf(9))

const newArr = myArr.join()// ye array element ko string me comma seperated me convert kar deta hia
console.log(newArr)
console.log(myArr)

//slice,splice
console.loe("A",myArr)
const myN1 = myArr.slice(1,3)//ye 1 se leke 2 tak element de dega 3 ko include nhi karega
console.log(myN1)

console.log("B",myArr);

const myN2 = myArr.splice(1,3)// splice 1 se leke 3 tak element dega sath hi sath original array se hata bhi dega 
console.log(myN2)