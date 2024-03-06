const mr_heroes = ["spiderman","Ironman","thor"]
const dc_heroes = ["Batman","superman","flash"]

// mr_heroes.push(dc_heroes)
// console.log(mr_heroes)

// const all_heroes = mr_heroes.concat(dc_heroes)
// console.log(all_heroes)

const all_Heroes = [...mr_heroes,...dc_heroes]
console.log(all_Heroes)

const another_array = [1,2,3,[4,5,6],7,[6,7,[4,5]]]

const real_another_array = another_array.flat(Infinity)//sabko ek array me convert karke de dega bhale hi kitna ander depth me array  ho
console.log(real_another_array)

console.log(Array.isArray("Karn Tiwari"))
console.log(Array.from("Karn Tiwari"));// ye array me badal dega


let score1 = 100

let score2 =200

let score3 = 300

console.log(Array.of(score1,score2,score3))


