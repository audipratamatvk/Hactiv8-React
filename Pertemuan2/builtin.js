let animals = [
    {name: "fluffy", type: "cat"},
    {name: "pluto", type: "dog"},
    {name: "nemo", type: "fish"},
    {name: "momo", type: "cat"}
]

//Malah Passing by reference
// let animalsCopy = [...animals]
// for (let i=0; i<animalsCopy.length; i++){
//     animalsCopy[i].status = true
// }
// console.log(animals)
// console.log(animalsCopy)

let animalsCopy = animals.map((el) =>{
    let obj = {...el, status:true}
    return obj
})

console.log(animalsCopy)
console.log(animals)

let result = []
for (let i = 0; i < animals.length; i++) {
    if (animals[i].type ==="cat"){
        result.push(animals[i])
    }
}
console.log(result)

let cat = animals.filter((el) =>{
    if (el.type === "cat"){
        return el
    }
})
console.log(cat)
console.log("----------------")
//One liner
let cats = animals.filter((el) => el.type==="cats")
console.log(cat)

//Find
//Filter jika engga ketemu akan return empty array
//Find akan return undefined
let catsFind = animals.find((el) => el.type==="cats")
console.log(catsFind)
