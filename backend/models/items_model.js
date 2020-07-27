const mongoose = require('mongoose')
const Schema = mongoose.Schema


const KartuStokScheme = new Schema({
  tanggal:{
    type:Date,
    required:[true],
    default:Date.now()
  },
  noNota:{
    type:String,
    default:""
  },
  keterangan:{
    type:String,
    required:[true]
  },
  masuk:{
    type:Number,
    default:0
  },
  keluar:{
    type:Number,
    default:0
  },
  sisa:{
    type:Number,
    required:[true]
  }
})

const ItemsScheme = new Schema({
  itemno: {
    type:String,
    required:[true]
  },
  itemdesc: {
    type:String,
    required:[true]
  },
  available: {
    type:Boolean,
    default:true
  },
  kartuStok: [KartuStokScheme]
})

const ItemsModel = mongoose.model('items', ItemsScheme)
module.exports = ItemsModel 