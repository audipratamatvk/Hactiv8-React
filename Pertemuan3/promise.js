function greet(){
    //Belajar membuat promise
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            if (Math.random() > 0.5){
                resolve("Berhasil")
            }else{
                reject("gagal")
            }
        }, 3000) 
    })
}
// console.log(greet())

greet()
    .then((output1) => {
        console.log(output1)
        return greet()
    })
    .then((output2) => {
        console.log(output2)
    })
    .catch((err) => {
        console.log(err)
    })