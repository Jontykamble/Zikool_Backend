const express = require('express')
const router = express.Router();
router.get('xyz/',(req,res)=>{
    res.send("hello");
})
module.exports = router;