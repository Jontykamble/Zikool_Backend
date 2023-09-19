const express=require('express')
const router=express.Router()


router.get('/displayData',(req,res)=>{

    try{
        res.send([global.food_item,global.foodCategory])

    }catch(error){
        console.error(error.message)
        res.send("Server error")
    }
})


module.exports=router