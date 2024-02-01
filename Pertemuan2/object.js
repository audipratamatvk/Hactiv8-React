let student1_name = "John Doe"
let student2_major = "IT"
let student1_gpa = 3.5

let obj = {}
//add keyname & value
obj.name = "Fulan"
obj.major = "IT"
obj.major = "SI"
obj["passed classes"]= []

//delete keyname
delete obj.name

obj["passed classes"].push("OOP","Cybersecurity", "UI UX")

obj["address"]="Earth"
obj["year"]= 1900

console.log(obj)

let student = {
    name: "Fulan",
    major: "IT",
    gpa: 3.5,
    "passed classes": [
        "Basic Programming",
        "Database Basic"
    ]
}
console.log(student)
console.log("---------")
console.log(Object.keys(student))
console.log(Object.values(student))
console.log(Object.entries(student))

