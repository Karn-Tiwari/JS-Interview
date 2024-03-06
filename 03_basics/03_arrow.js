//This current context ko refer karta hai

const user = {
    username:"karn",
    price:999,
    welcomeMessage:function(){
        console.log(`${this.username},welcome to website`)
        console.log(this);// ye current context ko refer kar rha hai
    }
}

// user.welcomeMessage()// yaha pe username me karn rahega
// user.username = "shivam"
// user.welcomeMessage()// yaha pe username me shivam rahega kuki context becch me change hua h

// console.log(this)//Node ka global context empty object hota hai {} lekin browser ka window hota hai

// function chai(){
//     let username = "karn"
//     console.log(this.username)// yaha pe this.username me karn nhi karega aur undefined print karega kuki THIS sirf object  mee hi work karna hai function me work nhi kart hai
// }

// chai()



//ARROW FUNCTION
// const chai = ()=>{
//     let username = "karn"
//     console.log(this)//yaha pe empty object ayega
// }

// chai()

// const addTwo = (num1,num2)=>{// ye explicit return hai
//     return num1 + num2
// }

// const addTwo = (num1,num2)=>(num1 + num2)// yaha implecit return ho rha hai aur return tabhi karna padta hai jab curli braces ho

// console.log(3,4)