const mongoose = require("mongoose");

module.exports = ()=>{
    return mongoose.connect("mongodb+srv://prajwal:prajwal@cluster0.p5lz6.mongodb.net/test").then(()=>{
        console.log("connected to DB..")
    }).catch((e)=>{
        console.log(e)
    })
}