const express = require('express');
const connectMongoDB = require('./config/mongoDB');
const app = express();
const env = require('dotenv').config();

const PORT = process.env.SERVER_PORT;


connectMongoDB()

// get body data
app.use(express.json())
app.use(express.urlencoded({extended : false}))


app.use('/api/admin', require('./routes/admin'))

app.listen(PORT, ()=>{
    console.log(`Server Is running on port : ${PORT}`);
})