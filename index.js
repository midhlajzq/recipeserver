// automatically load env file to our app
require('dotenv').config()

// import express
const express = require('express')

// import cors
const cors =require('cors')

// import connection file
require('./db/connection')

// import router
const router =require('./routes/router')


// create server app
const server = express()

// store port number
const PORT =3000 || process.env.PORT

// use cors express.json and router in server app cors
server.use(cors())
server.use(express.json())
server.use(router)

// route
// server.get('/',(req,res)=>{
//     res.send('recipe server started')
// })

// run app
server.listen(PORT,()=>{
    console.log(`Recipe server started at port ${PORT}`);
})

