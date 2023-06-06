
import express from 'express'
import conectDBTest from './config/connectDB.js'
const app = express()
const PORT = 3000


conectDBTest()
app.listen(PORT, ()=> {
    console.log(`server listening in the port: ${PORT}`)
})