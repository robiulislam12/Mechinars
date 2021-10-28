const express = require('express');
const cors = require('cors');

//Enable dotenv
require('dotenv').config();

const app = express();
const PORT = process.env.PORT;

//middleware 
app.use(cors())
app.use(express.json());


//check for all things
app.get('/', (req, res)=>{
    res.send('<h1>Hello World</h1>')
})

//Listening the app
app.listen(PORT, () =>{
    console.log('Server is running', PORT)
})