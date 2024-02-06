// function Handphone(){

// }

class Handphone {
    constructor(){
        this.memory = 10
        this.battery = 0
    }

    playMusic() {
        return "...."
    }

    call(phoneNumber = "0000"){
        return "Calling " + phoneNumber 
    }
}
const handphoneAyu = new Handphone()
console.log(handphoneAyu)
console.log(handphoneAyu.playMusic())
console.log(handphoneAyu.call("0812345678"))

class Android extends Handphone {
    #os
    constructor(){
        super()
        this.applications = []
        this.#os = "Android"
    }

    playMusic() {
        console.log(this.#os)
        return ":)"
    }
}
const handphoneAudi = new Android()
console.log(handphoneAudi)
console.log(handphoneAudi.playMusic())
console.log(handphoneAudi.call("0812345678"))
console.log(handphoneAudi.playMusic())

export default Android;