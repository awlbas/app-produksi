const express = require('express')
const ItemsModel = require('../models/items_model')
const router = express.Router()

router.get('/items', (req,res)=>{
  ItemsModel.find().then(items => res.send(items))
})

router.post('/items', (req,res,next)=>{
  ItemsModel.create(req.body).then( item => {
    res.send(item)
  }).catch(next)
})

router.put('/items/:id', (req,res, next)=>{
  ItemsModel.findByIdAndUpdate(req.params.id, {$push: {kartuStok:req.body}},
  {new:true} ).then((item)=>res.send(item))
})

router.delete('/items/:id', (req,res)=>{
  res.send('delete')
})

module.exports = router
