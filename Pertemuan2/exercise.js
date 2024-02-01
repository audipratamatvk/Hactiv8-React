let input = [20, 30, 31, 45, 100, 101]
let operator = "Genap"

const filterAngka = (numbers, operator) => {
    let result = []
    for(let i=0; i<numbers.length;i++){
        if (numbers[i] %2 ==0 && operator ==="Genap"){
            result.push(numbers[i])
        }else if(numbers[i] %2 !==0 && operator ==="Ganjil"){
            result.push(numbers[i])
        }else{
            break
        }
    }
    return result
}
console.log(filterAngka(input, "Genap"))
console.log(filterAngka(input, "Ganjil"))
