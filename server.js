require('dotenv').config()

const express = require('express');
const app = express();

const db = require('./db')
const StudentData = require('./Models/StudentData')
const bodyParser = require('body-parser')

app.use(bodyParser.json())

const StudentRoutes = require('./Routes/StudentRoutes')


app.use('/', StudentRoutes)

const PORT = process.env.PORT

app.listen( PORT , () =>{
    console. log('server run at 5000')
})



