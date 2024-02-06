const arrayOfWords = ['cucumber', 'tomatos', 'avocado']
const complicatedArray = ['cucumber', 44, true]

function makeAllCaps(strings) {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            let result = []
            try {
                for (let index = 0; index < strings.length; index++) {
                    result.push(strings[index].toString().toUpperCase())
                }
            } catch (err) {
                reject(err)
            }
            return resolve(result)
        }, 1000)
    })
}

function sortWords(strings) {
    return strings.sort()
}

makeAllCaps(arrayOfWords)
    .then((data) => {
        return data
    })
    .then(sortWords)
    .then(result => { console.log(result) })
    .catch(error => { console.log(error) })

makeAllCaps(complicatedArray)
    .then((data) => {
        return data
    })
    .then(sortWords)
    .then(result => { console.log(result) })
    .catch(error => { console.log(error) })