const express = require('express')
const cors = require('cors')
const mongoose = require('mongoose')
const exercisesRouter = require('./routes/exercises')
const usersRouter = require('./routes/users')
const uri = require('./config/db.js')

require('dotenv').config()

const app = express()
const port = process.env.PORT || 5000

// middleware
app.use(cors())
app.use(express.json())

// routes
app.use('/exercises', exercisesRouter)
app.use('/users', usersRouter)

// mongodb connection
mongoose.connect(uri, { useNewUrlParser: true, useCreateIndex: true,  useUnifiedTopology: true }, () => {
	console.log('Connected to the database!');
})

app.listen(port, () => {
	console.log(`Server is running on port: ${port}`)
})