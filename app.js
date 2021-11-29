const express = require("express")

const jobs = require("./jobs")

const app = express()

app.use(express.json());

app.get("/",(req,res)=>{
    res.send(jobs)
})

app.listen(2345,function(){
    console.log("listening on port 2345")
})