// const MongoClient = require('mongoose');
require('dotenv').config()

// MongoClient.set('useNewUrlParser', true);
// MongoClient.set('useFindAndModify', false);
// MongoClient.set('useCreateIndex', true);
// { useNewUrlParser: true, useUnifiedTopology: true }

// const connectDB = async () => {
//     try{
//         // mongodb connection string
//         const con = await MongoClient.connect(process.env.DB_CONNECTION)
//         console.log(`MongoDB connected : ${con.connection.host}`);
//     }catch(err){
//         console.log(err);
//         process.exit(1);
//     }
// }

// module.exports = connectDB

const mysql = require('mysql2');

// create the connection to database
const connectDB = mysql.createConnection({
  host: 'localhost',
  user: 'root',
  password:'',
  database: "medicalbooking" 
});
connectDB.connect(function (err) {
    if (err) {
        console.log(err);
    };
    console.log('Database is connected successfully !');
});

module.exports = connectDB;
