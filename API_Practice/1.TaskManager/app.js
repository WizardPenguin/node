require("dotenv").config()
const express = require("express")
const app = express()
// if port is not defined in .env then use 3000
const port = process.env.PORT | 3000
app.get("/hello",(req,res)=>{
    res.send("Sample testing")
})
app.listen(port,()=>{
    console.log(`listening at port ${port} .....`)
})