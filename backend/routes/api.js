const express = require('express')

const router = express.Router()

router.get('/items', (req,res)=>{
    res.send('get')
})
router.post('/items', (req,res)=>{
    res.send('post')
})
router.put('/items/:id', (req,res)=>{
    res.send('put')
})
router.delete('/items/:id', (req,res)=>{
    res.send('delete')
})

module.exports = router
