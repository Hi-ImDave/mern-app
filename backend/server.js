const path = require ('path')
const express = require('express') // backend framework
const colors = require('colors') // custom console.log colors
const dotenv = require('dotenv').config() // environment variables
const {errorHandler} = require('./middleware/errorMiddleware') // custom error handler
const connectDB = require('./config/database') // Brings in mongoDB Connection
const port = process.env.PORT || 5000 // port for server

connectDB() // runs db connection

const app = express() // initialize express

// MIDDLEWARE
app.use(express.json())
app.use(express.urlencoded({ extended: false }))

// ROUTES
app.use('/api/goals', require('./routes/goalRoutes'))
app.use('/api/users', require('./routes/userRoutes'))

// Serve frontend
if (process.env.NODE_ENV === 'production') {
    app.use(express.static(path.join(__dirname, '../frontend/build')));
  
    app.get('*', (req, res) =>
      res.sendFile(
        path.resolve(__dirname, '../', 'frontend', 'build', 'index.html')
      )
    );
  } else {
    app.get('/', (req, res) => res.send('Please set to production'));
  }

app.use(errorHandler) // allows use of custom error handler

app.listen(port, () => console.log(`Server started on port ${port}`.bold.green))
