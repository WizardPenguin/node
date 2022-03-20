// create large file 
// then read it using stream and send it over network using stream
// pass status code and type of text we are sending in 2 different routers 
const http = require('http')
const fs = require('fs').promises
const util = require('util')
const createReadStream = require('fs').createReadStream
const readFileSync = require('fs').readFileSync
const server = http.createServer()
const createBigFile = ()=>{
    for(let i=0;i<10000;i+=1){
        fs.writeFile("./largeFile.txt","this is text \n",{flag:'a',encoding:'utf-8'}).then(()=>{
            // console.log(`WRITTING ITERATION: ${i}`)
            return 
        })
    }
}
// it's again problematic, writingi s done asynchronously so server might open before all writings are done 
// that causes user to get wrong data, since all writing is not completed
createBigFile(); 
server.on("request",(req,res)=>{
    if(req.url === '/'){
        res.writeHead(200,{'contnet-type': 'text/html'})
        res.end(readFileSync("./index.html",{encoding:"utf-8"}))
    }
    else if(req.url === '/file'){
        res.writeHead(200,{'content-type': 'text/plain'})
        const readStream = createReadStream("./largeFile.txt",{encoding: 'utf-8'})
        readStream.pipe(res)
        // res.end(); 
    }
    else{
        res.end("<h1>Oops [not found] </h1>")
    }
})
server.listen(8000,"localhost",()=>{
    console.log("connected to server : 8000")
})
// fs.unlink("./largeFile.txt").then(()=>{
//     console.log("successfull removed file")
// })
// since writing is done asynchronously that causes deletion of file earlier and then wirting creates is again 
// that's why not much of effect is observed 