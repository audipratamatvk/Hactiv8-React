let books = []
console.log(books)
console.log(books.length)

books.push("Harry Potter")
console.log(books)
console.log(books.length)

let scores = [
    ["Math", 100],
    ["IPA", 50],
    ["IPS", 20]
]
console.log(scores[0][1])

scores[0] = "Matematika"
console.log(scores)

//Sama aja dengan array biasa
let rakBuku = new Array("Harry", "Potter")
console.log(rakBuku[0])

let nilai = [
    90,
    80
]
console.log(scores[scores.length-1])

//Javascript secara default passing by reference
let books2 = books
books2[0] = "Clean Code"
console.log(books2)
console.log(books)

//Jadi supaya hanya passing value, gunakan ...
let books3 = [...books2, "Buku Komik", "Buku Putih"]
books2.push("SOLID Principle")
console.log(books3)

console.log(books3.slice(0,3))
