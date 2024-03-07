// for

// for (let i = 0; i < array.length; i++) {
//     const element = array[i];
    
// }

// //for of 

// const arr = [1,2,3,4,5]

// for(const num of arr){// hum string, array , object kisi pe bhi for of loop chala sakte hai
//     console.log(num);
// }

// const greetings = "Hello World!"

// for(const greet of greetings){
//     console.log(`Each char is ${greet}`)
// }


//Maps

const map = new Map()// map unique key value pair store karta hai object k form me
map.set("In","India")
map.set("USA","United States of America")
map.set("Fr","France")
map.set("In","India")

// console.log(map)
//Ab agar humko map pe loop lagana hai to square bracket ka use karna padega

for(const [key,value] of map){
    console.log(key,":-",value)
}

// Ab agar object pe loop chalana hai to for in loop chalana hoga

const myObject = {
    js:'Javascipt',
    cpp:'C++',
    rb:'Ruby',
    swift:'swift by apple'
}
for(const key in myObject){
    console.log(`${key} shortcut is for ${myObject[key]}`)
}


const coding = ["js","ruby","java","python","cpp"]

coding.forEach(function (val){// ye callback function hai aur callback fucntion ka name nhi hota hai
console.log(val)
})

coding.forEacch((item)=>{// ya to forEach me callback function dedo ya phir bahar koi function likho aur phir us function k name ka refernce dedo
    console.log(item);
})
