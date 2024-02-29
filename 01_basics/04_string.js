
// const name = "karn"
// const repoCount = 50
// // console.log(name + repCount + "value") this is a old ways of writing string in concatinaation

// console.log(`my name is ${name} and number of repositary is ${repoCount}`);

const gameName = new String("Karn Tiwari")

console.log(gameName[0])

console.log(gameName.__proto__)

console.log(gameName.length)

console.log(gameName.toUpperCase())
console.log(gameName.charAt(5))
console.log(gameName.indexOf('t'))

const newString = gameName.substring(0,4)//it start from 0 index and not include 4th index
console.log(newString)

const anotherString = gameName.slice(-2,4)
console.log(anotherString)//it gives the character from end
const newStringOne = "    Karn      "
console.log(newStringOne)
console.log(newStringOne.trim())//It trim the space

const url = "https://karn.com//karn%20tiwari"
console.log(url.replace('%20','-'))

console.log(url.includes('Shivam')) 