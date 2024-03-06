// Immediately Invoked function expression (IIFE)
// Immediate execution k liye IIFE use hota hai sath hi sath global scope k pollution ko remove karne k liye use karte hai jaise ki bht sare variable wagera declare ho



// ()()

(function chai(){// isko named IIFE kahte hai 
  console.log(`DB CONNECTED`);
})();// isme semicolon lagana padega warna error dega kuki IIFE ko nhi pata hota hai kaha pe execute karna hai

(
    (name)=>{
        console.log(`DB CONNECTED TWO ${name}`)
    }
)("karn")
