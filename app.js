const express = require("express");

const mongoose = require("mongoose");
const { stringify } = require("querystring");

const jobs = require("./jobs.json")

const connect = () => {
    return mongoose.connect(" mongodb://127.0.0.1:27017/test")
}
const jobSchema = new mongoose.Schema({
    company_name : {type: String, required: true},
    jobs:{type: String, required:true},
    skill_set:{type:String, required:true},
    notice_period:{type:Number,required:true}
});
const app = express()

app.use(express.json());

app.get("/",(req,res)=>{
    res.send(jobs)
})

app.listen(2345, async function(){
    await connect();
    console.log("listening on port 2345")
})