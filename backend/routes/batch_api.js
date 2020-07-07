const express = require('express')
const BatchModel = require('../models/batch_model')
const router = express.Router()

router.get('/batch', (req,res)=>{
  BatchModel.find(req.query).then(batches => res.send(batches))
})

router.post('/batch', (req,res,next)=>{
  BatchModel.create(req.body).then( batch => {
    res.send(batch)
  }).catch(next)
})

router.put('/batch/:id', (req,res, next)=>{
  res.send('put')
})

router.delete('/batch/:id', (req,res)=>{
  res.send('delete')
})

module.exports = router
