const express = require('express')
const router = express.Router()
const recipients = require('../models/recipients')
const querystring = require('querystring')






router.get('/recipients', async(req,res) => {
    try{
           const recipients = req.query.subscription_status
           res.json(recipients)
    }catch(err){
        res.send('Error ' + err)
    }
})

router.post('/recipients', async(req,res) => {
    const recipients = new Recipients({
        name: req.body.name,
        email: req.body.email,
        subscription_status: req.body.sub
    })

    try{
        const a1 =  await recipients.save() 
        res.json(a1)
    }catch(err){
        res.send('Error')
    }
})

router.delete('/recipients', async(req,res) => {
    try{
           const recipient = await recipients.deleteMany()
           res.json(recipient)
    }catch(err){
        res.send('Error ' + err)
    }
})


router.get('/recipients', async(req,res) => {
    try{
           const recipients = await Recipients.findbyemail(req.query.email)
           res.json(recipients)
    }catch(err){
        res.send('Error ' + err)
    }
})




router.patch('/recipients',async(req,res)=> {
    try{
        const recipients = await Recipients.findbyemail(req.query.email) 
        recipients.email = req.body.email
        const a1 = await recipients.save()
        res.json(a1)   
    }catch(err){
        res.send('Error')
    }

})

router.delete('/recipients', async(req,res) => {
    try{
           const recipients = await Recipients.deletOne(req.query.email)
           res.json(recipients)
    }catch(err){
        res.send('Error ' + err)
    }
})



router.get('/recipients',async(req,res)=> {
    try{
        const recipients = await Recipients.findByemail(req.query.email) 
        recipients.subscription_status = true
        const a1 = await recipients.save()
        res.json(a1)   
    }catch(err){
        res.send('Error')
    }

})

router.get('/recipients',async(req,res)=> {
    try{
        const recipients = await Recipients.findByemail(req.query.email) 
        recipients.unsubscription_status = false
        const a1 = await recipients.save()
        res.json(a1)   
    }catch(err){
        res.send('Error')
    }

})
router.post
module.exports = router
