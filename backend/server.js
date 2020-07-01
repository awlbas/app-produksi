const express = require('express')
const cors = require('cors')
const router = require('./routes/api')
const Mongoose = require('mongoose')

// Mongoose.connect('mongodb://localhost/app-produksi')
// Mongoose.Promise = global.Promise

const app = express()

app.use(cors())
app.use(express.json())
app.use('/api', router)

app.listen(4000, () => console.log('now listening for request'))