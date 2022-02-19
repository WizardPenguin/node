// 1. http module
const http = require("http")
const server = http.createServer()
server.on("request",(req,res)=>{
    if(req.url == '/'){
        res.end("this is home route")
    }
})

// 2. streams 
// these are used to read/write data in chunks and defined in file module 
const fs = require("fs")
const rstream = fs.createReadStream("input.txt")
rstream.on("data",(chunk)=>{
    console.log(chunk)
    console.log("chunk read")
})
rstream.on("end",()=>{
    console.log("we have read whole file")
})
rstream.on("error",(err)=>{
    console.log(err)
})
