// let a = 10
// const b = 20
// var c = 30

//scopping ek ice-cream k example jaise hai bache aur bado k beecch k

function parent(){
    const userName = "karn tiwari"
    function child(){
        const website = "youtube"
        console.log(userName)
    }
    console.log(website)//error dega koi website child scope k ander hai iseliye ye access nhi kar sakta 

    child()//child ko execute karna 
}
parent()//parent ko execute karna 


//+++++++++++++++++++ Interesting ++++++++++

function addone(num){//isko function statement kahte hai
    return num + 1
}
addone(5)


// addTwo(6) isko agar run karenge to undefined ayega kuki function ko declare karke kisi variable me store kiya gaya hai to haemshaa uske baad hi call kar sakte hai isko HOSTING boltle ahi
const addTwo = function(num){//isko function expresssion kahte hai
    return num + 2
}
addTwo(6)

