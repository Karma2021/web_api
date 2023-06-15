require('dotenv').config()
const express = require("express")
const mongoose = require("mongoose")

const app = express();
const port = process.env.port || 3000

const bike_router = require('./routes/bike_routes')
const user_router = require('./routes/user_routes')

mongoose.connect('mongodb://127.0.0.1:27017/demo')
    .then(() => {
        console.log("connected to mongodb")
    })
    .catch((err) => console.log(err))

app.use(express.json())

app.use(express.static('public'))

app.use('/users', user_router)
app.use('/bikes', bike_router)

app.get('/', (req, res)=>{
    res.send("Home Page")
})


app.listen(port, ()=>{
    
    console.log(`Server running at port ${port}`)
})