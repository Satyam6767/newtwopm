const express = require('express');
const app = express();

const db = require('./db')
const StudentData = require('./Models/StudentData')
const bodyParser = require('body-parser')

app.use(bodyParser.json())

const StudentRoutes = require('./Routes/StudentRoutes')


app.use('/', StudentRoutes)



app.listen( 5000 , () =>{
    console. log('server run at 5000')
})



