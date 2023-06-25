const express = require('express')
const mongoose = require('mongoose')
const cors = require('cors')
const connectToMongo = require('./db');
connectToMongo();

const port = process.env.PORT || 5000
const app = express()

app.use(cors())
app.use(express.json())


// Available routes
// app.use('/api/auth', require('./routes/auth'))
// app.use('/api/notes', require('./routes/notes')) 




app.get('/', (req, res) => {
  res.send('Hello World!')
})

app.use('/api/auth', require('./routes/auth'))
app.use('/api/notes', require('./routes/notes')) 


app.listen(port, () => {
  console.log(`new1b Backend listening on port ${port}`)
})