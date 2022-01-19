const mongoose = require("mongoose")


const productSchema = new mongoose.Schema({
    name:{
        type:String,
        required:true
    },
    price:{
        type:Number,
        required:true,
    },
    size:[{
        type:String,
        required:true
    }],
    img:[{
        type:String,
        required:true
    }],
    description:String,
    details:String,
    shipping:String,
    tags:[{
        type:String,
        required:true,
    }],
    category:[{
        type:String,
        required:true,
    }]

},{
    versionKey:false,
    timestamps:true,
})

module.exports = mongoose.model("product",productSchema);




