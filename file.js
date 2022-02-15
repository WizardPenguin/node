console.log("working fine")
// require file module 
const fs = require("fs")
// create file 
fs.writeFileSync("info.txt","name : Raman")
// append data
fs.appendFileSync("info.txt", "\nage : 20")
// reading file 
const buffer = fs.readFileSync("info.txt")
console.log(buffer.toString())  
// reading without reading buffere
let data = fs.readFileSync("info.txt","utf8")
console.log(data)
// asynchronous calls requires callback that Tell what to do when operation is completed , it's data needn't taken outside callback 
fs.readFile("info.txt","utf-8",(_,data)=>{
    console.log(data)
});
fs.mkdirSync("./tempDirectory")  // only works once since folder can be created again with same name 
fs.renameSync("./info.txt","./info2.txt")
// rename can be easily used to move file from 1 folder to other
fs.renameSync("./info2.txt","./tempDirectory/info2.txt")
fs.unlinkSync("./tempDirectory/info2.txt")
fs.rmdirSync("./tempDirectory")
