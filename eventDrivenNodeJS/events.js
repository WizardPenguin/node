// event is class where we can define events by naming and giving them functionality
// then we can emit those functions by refrencing functionality by name 
const EventEmitter = require("events").EventEmitter
let customEmitter = new EventEmitter()
customEmitter.on("respond",(name,age)=>{
    console.log(`user with name : ${name} and age : ${age} is responding`)
})
customEmitter.on("not-respond",(name,age)=>{
    console.log(`user with name : ${name} and age : ${age} is not responding`)
})
// appends to functionality of this even 
customEmitter.on("respond",()=>{
    console.log("responding again")
})
customEmitter.emit("respond","wizard",18)
customEmitter.emit("not-respond","wizzz",29)