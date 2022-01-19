const express = require("express")
const router = express.Router();

router.get("", (req,res)=>{
    res.send(`<center style="margin:100px;"><h1>Welcome to Fallipe app</h1></center>`)
})
module.exports = router;