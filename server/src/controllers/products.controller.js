
const express = require("express")
const router = express.Router();
const Product = require("../models/product.model");


// Curd opration for Users
router.get("", async(req,res)=>{
    try{
        const products = await Product.find().lean().exec();
        return res.status(200).send(products) 
    }catch(e){
       return res.send(e)
    }
});

router.get("/:id", async(req,res)=>{
    try{
        const product = await Product.findById(req.params.id).lean().exec();
        return res.status(200).send(product);
    }catch(e){
        return res.send(e)
    }
});

router.post("", async(req,res)=>{  
    try{
        const product = await Product.create(req.body);
        return res.status(201).send(product);
    }catch(e){
        return res.send(e)
    }
});

router.patch("/:id", async(req,res)=>{
    try{
        const product = await Product.findByIdAndUpdate(req.params.id, req.body, {new:true}).lean().exec();
        return res.send(product);
    }catch(e){
        return res.send(e)
    }
});

router.delete("/:id", async(req,res)=>{
    try{
        const product = await Product.findByIdAndDelete(req.params.id).lean().exec();
        return res.send("product deleted...")
    }catch(e){
        return res.send(e)
    }
})

module.exports = router;
