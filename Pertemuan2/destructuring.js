let student = {
    name: "Fulan",
    major: "IT",
    gpa: 3.5,
    pets: {
        snowy :4,
        pluto: 5
    }
}
let {pets}= student
console.log(pets)

console.log("------Destructuring Object------")
let {gpa, pets: {pluto}, name, age}=student
console.log(name)
console.log(pluto)
console.log(gpa)
console.log(age)

console.log("------Destructuring Array------")
//destructuring array
let arr = [1, 2, 3, 4, 5, "Ayu"]
let [angka1, angka2] = arr
console.log(angka1)
console.log(angka2)

//Destructuring passing by value
console.log("------Destructuring Array 2------")
let res = ["John","Doe","Jakarta"]
let [firstName1, lastName1, city1]= res
city1 = "Bandung"
console.log(city1)
console.log(res)

//Buat liat tipe data
console.log(typeof res)
console.log(typeof arr)
console.log(typeof 1)

const listNumberGenap = () => {
    return {
        statusCode :200,
        data: [100,50,70],
        message: "OK"
    }
}
const {statusCode, data} = listNumberGenap()
console.log(statusCode, data)