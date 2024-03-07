const myNums = [1,2,3,4,5,6,7,8,9,10]
//Filter me kya hota hai har ek value pe jate hai aur ek callback function chalta ahi jisme condition di jati hai aur uss condition ko pass karta hai wo return karna hai
// const newNums = myNums.filter((num)=>{
// return num>4
// })

// console.log(newNums)
//Chaining of map and filter

const newNums = myNums.map((num)=>num*10).map((num)=>num + 1).filter((num)=>num>=40)
console.log(newNums)

//Reduce()
// initial value 0 hai 
const sumWithInitial = myNums.reduce(
   function( previousValue,currentValue){
    return previousValue + currentValue
   },0
)

console.log(sumWithInitial)