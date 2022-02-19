
const http = require("http")

// server deals with request and sends response
console.log("creating server")
const server = http.createServer((req,res)=>{
    console.log(req.url)
    if(req.url == "/"){
        return res.end("this is base route")
    }
    if(req.url == "/home"){
        // due to blocking code at /home route 
        // any user accessing any other route won't get response since server is busy in this blocking code 
        // solution is to split task into small chunks and doing it asynchroniously 
        let result; 
        for(let i=0;i<1000000000;i+=1){
            result += 1; 
        }
        console.log(result)
        return res.end("this is HOME route")
    }
    res.end(`<h1> Oops! something went wront </h1>`)
})
server.listen(5000)



