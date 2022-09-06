// backend framework
const express = require('express')
// colors object
const colors = require('colors')
// environment variables
const dotenv = require('dotenv').config()
// custom error handler
const {errorHandler} = require('./middleware/errorMiddleware')
// Brings in mongoDB Connection
const connectDB = require('./config/database')
// port for server
const port = process.env.PORT || 5000

// runs db connection
connectDB()

//initialize express
const app = express()

// middleware
app.use(express.json())
app.use(express.urlencoded({ extended: false }))

app.use('/api/goals', require('./routes/goalRoutes'))

app.use(errorHandler)

app.listen(port, () => console.log(`Server started on port ${port}`))
