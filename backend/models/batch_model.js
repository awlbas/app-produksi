const mongoose = require('mongoose')
const Schema = mongoose.Schema


const ItemScheme = new Schema({
  itemno:{
    type:String,
    required:[true]
  },
  itemdesc:{
    type:String,
    required:[true]
  },
  qty:{
    type:Number,
    required:[true]
  }
})

const BatchScheme = new Schema({
  noBatch: {
    type:String,
    required:[true]
  },
  tanggal: {
    type:Date,
    required:[true],
    default:Date.now()
  },
  Produk: {
    type:String,
    required:[true]
  },
  qtyOrder: {
    type:Number,
    required:[true]
  },
  items: [ItemScheme]
})

const BatchModel = mongoose.model('batch', BatchScheme)
module.exports = BatchModel
 