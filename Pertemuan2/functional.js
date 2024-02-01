//kalo tanpa return, maka akan keluar undefined
// function greet(name = "World"){
//     console.log("Hai "+ name)
// }

function greet(name = "World"){
    return "Hai "+ name
}

//kalo tanpa return, maka akan keluar undefined
let names = ["Audi", "Danar","Ari"]
for (let i =0; i < names.length; i++){
    console.log(greet(names[i]))
}

//Kita bisa define default parameter
console.log(greet())

// greet("Audi")
// greet("Danar")
// greet("Ari")

//Arrow Function
const greet2 = (name) => {
    return "Hai "+name
}
console.log(greet2("Hacktiv8"))

const greet3 = function (name){
    return "Hai "+name
}
console.log(greet3("Hacktiv8"))

const greet4 = name => "Hai "+ name
console.log(greet4("Hacktiv8 4"))

const tambah = (number1, number2) => {
    return number1 + number2
}

const input = [20,30,40,40,60,40]
const kalkulasi = (numbers) => {
    let result = []
    for (let index = 0; index < numbers.length; index+=2){
        const data = tambah(numbers[index] , numbers[index+1])
        result.push(data)
    }
    return result
}
console.log(kalkulasi(input))
console.log(kalkulasi([22, 22, 45, 45]))

// const data1 = tambah(input[0], input[1])
// const data2 = tambah(input[2], input[3])
// const data3 = tambah(input[3], input[4])
// console.log(data1, data2, data3)


