const express = require("express")
const app = express()
app.get("/",(req,res)=>{
    console.log("requested home")
    res.status(200).send("home page")
})
app.get("/about",(req,res)=>{
    console.log("requested about")
    res.status(200).send("about page")
})
app.all("*",(req,res)=>{
    res.status(404).send("<h1> Oops error</h1>")
})
app.listen(8000,()=>{
    console.log("listening at port 8000")
})