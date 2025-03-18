//connection with database

const mongoose = require('mongoose');

require('dotenv').config();

const dbConnect = () => {

    mongoose.connect(process.env.DATABASE_URL)
    .then(()=>{
        console.log('Database connection established');
    })
    .catch((err) => {
        console.error("Error connecting to MongoDB ......");
        console.log(err.message);
        process.exit(1);
    })
}

module.exports = dbConnect;