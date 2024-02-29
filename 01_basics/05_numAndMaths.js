const score = 400
console.log(score)
const balance = new Number(100)
console.log(balance)

console.log(balance.toString())

console.log(balance.toFixed(2))//showing upto 2 decimal places mainly in e-commerce website

const otherNumber = 123.8966

console.log(otherNumber.toPrecision(3))

const hundreds = 10000000

console.log(hundreds.toLocaleString('en-IN'))

console.log(Math.random())
console.log((Math.random()*10)+1);
console.log(Math.floor(Math.random()*10)+1)

const min = 10
const max = 20

console.log(Math.floor(Math.random()*10 (max-min + 1)) + min)
// floor leke lowerbound kar denge and 10 multiplay karke decimal 1 place right khichka denge and (max-min + 1) karke range pata kar lenge kitne se kitne k beech me random number chahiye  + min kar denge jisse waha se start ho 
