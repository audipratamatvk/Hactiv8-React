let numbers = [4,7,9,10]
let ganjil = numbers.filter((e) => e % 2 != 0)
console.log(ganjil)

//Callback async
const fs = require("fs")
fs.readFile("...", (err, data) =>{
    if (err){

    }else{
        const fs = require("fs")
        fs.readFile("...", (err, data) =>{
            if (err){
        
            }else{
                
            }
        }) 
    }
})