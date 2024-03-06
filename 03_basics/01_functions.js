// function addTwoNumbers(num1,num2){
//     console.log(num1 + num2)
// }

// const result = addTwoNumbers(3,4)
// 7 but result:undefined because it shouldnt return any thing

function addTwoNumbers(num1,num2){
    // let result = num1 + num2
    // return result
    return num1 + num2
}

const result = addTwoNumbers(4,6)

// console.log("Result",result) 

function loginUserMessage(username){
    if(!username){
        console.log("please enter a username")
        return
    }
    return `${username} just logged in`
}
// console.log(loginUserMessage("karn"))

function calculateCartPrice(...num1){// ye rest operator hai agar hme nhi pata ki kitne value ane wali h parameter me uske case me ise use karte hai
    return num1
}

console.log(calculateCartPrice(200,400,500)) 

const user = {
    userName:"karn",
    price:199
}

function handleObject(anyObject){
    console.log(`Username is ${anyObject.userName} and price is ${anyObject.price}`)
}

handleObject(user)