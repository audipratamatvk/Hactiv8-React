function hello(){
    console.log("Hai3")
}

//Callback --> Async / Sync
setTimeout(() => {
    console.log("Hai")
}, 2000);

setInterval(() => {
    console.log("Hai2")
}, 2000);

//Tanpa Invoke
setInterval(hello, 2000);

//limitasi dari this , tidak bisa dipanggil di arrow function
const hello2 = () => {
    console.log("Hai")
    console.log(this)
}

hello2()