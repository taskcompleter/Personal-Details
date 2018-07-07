const express=require('express');
const mongoose=require('mongoose');
const bodyparser=require('body-parser')
const cors=require('cors')
const path=require('path')
const config=require('./config/database')
const users=require('./routes/users')

const app=express();

//Connect to database
mongoose.connect(config.database);


//On Connection
mongoose.connection.on('connected',()=>{
    console.log("Connected to database"+config.database)
})

mongoose.connection.on('error',(err)=>{
    console.log("Database Error"+err)
})

//Body Parser Middleware
app.use(bodyparser.json())


//Cors Middleware
app.use(cors())

app.use(express.static(path.join(__dirname,'public')))

app.use('/abc',users) 

//Server Start
app.listen('5006',()=>{
    console.log('Server Started at port 5006')
})
