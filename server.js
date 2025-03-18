const express = require('express')
const app = express()

const dotenv = require('dotenv')
dotenv.config()
const PORT = process.env.PORT || 5000;

const dbConnect = require('./config/db');
dbConnect();
//requiring routing files
const userRoute = require('./routes/userRoutes')


//modulding all routing files
app.use(express.json())
app.use('/api',userRoute);


app.get('/',(req,res) =>{
    res.send("This is our HOME-PAGE 😎😎😎")
})

app.listen(PORT,()=>{
    console.log(`server is running at port ${PORT}`);
})

