const express = require('express')
const cors = require('cors')
const itemRouter = require('./routes/Items_api')
const batchRouter = require('./routes/batch_api')
const mongoose = require('mongoose')

mongoose.connect('mongodb://localhost/produksiapp', {
  useNewUrlParser: true, 
  useUnifiedTopology: true,
  useFindAndModify: false 
})
// mongoose.Promise = global.Promise

const app = express()

app.use(cors())
app.use(express.json())
app.use('/api', itemRouter)
app.use('/api', batchRouter)
// app.use((err,res)=>res.status(422).send({error:err._message}))

app.listen(4000, () => console.log('now listening for request'))