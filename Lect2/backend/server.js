require('dotenv').config()

const express = require('express')
const mongoose = require('mongoose')

// Importing Routes 
const workoutRoutes = require('./routes/workouts')
const homeRoutes = require('./routes/home')
const mainPage = require('./routes/mainsrc')

//  Express app
const app = express()

// Middleware
app.use(express.json())

app.use((req, res, next) => {
    console.log(req.path, req.method)
    next()
})

// Routes
app.use('/api/workouts', workoutRoutes)
app.use('/home', homeRoutes)
app.use('/', mainPage)


// Connect to DB
mongoose.connect(process.env.MONGO_URI)
    .then(() => {

        // Listen for reques
        app.listen(process.env.PORT, () =>{
        console.log(`Connected to DB & Listening on port`, process.env.port)
        console.log("http://localhost:4000/")
    })
    })
    .catch((error) => {
        console.log(error)
    })