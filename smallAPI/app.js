const { json } = require("body-parser")
const express = require("express")
const { createReadStream, readFileSync } = require("fs")
const { filter } = require("minimatch")
const {data} = require("./users")
const app = express()
// console.log(data,typeof data)
app.get("/",(req,res)=>{
    res.end("this is base ROUTE")
})
app.get("/users",(req,res)=>{
    res.status(200).json({
        success: true,
        users: data
    })
})
app.get("/users/user/:userId",(req,res)=>{
    const {userId} =  req.params
    console.log(userId)
    let filterData = data.filter((item)=>{
        return item.userId === Number(userId)
    })
    if(filterData.length < 1){
        return res.status(401).json({
            success: false,
            users: []
        })
    }
    res.status(202).json({
        success:true,
        users: filterData
    })
})
app.get("/users/query", (req,res)=>{
    const {id,userId} = req.query
    console.log(userId,id)
    let filterData = data.filter((item)=>{
        return item.userId == userId && item.id == id 
    }).map((item)=>{
        return {title: item.title}
    })
    if(filterData.length < 1){
        return res.status(402).json({
            success:false,
            users: []
        })
    }
    res.status(202).json({
        success:true,
        users: filterData
    })
})
app.listen(5000)