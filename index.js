const express = require('express');
require('dotenv').config()


const dotenv = require('dotenv');
const bodyparser = require("body-parser");
const connectDB = require('./Config/Database/ConnectionDB.js');


const app = express();
app.use(express.json());

// const  cors= require("cors")
// app.use(cors({
    //     origin: '*'
    // }));
    
    // parse request to body-parser
app.use(bodyparser.urlencoded({ extended: false }))
app.use(bodyparser.json())


dotenv.config( { path : 'config.env'} )

const PORT = process.env.PORT || 8080


// mongodb connection
// connectDB();


// load routers
// app.use('/', require('./Routers/Room'));
// app.use('/', require('./Routers/'))



app.listen(PORT, ()=> { console.log(`Server is running on http://localhost:${PORT}`)});
