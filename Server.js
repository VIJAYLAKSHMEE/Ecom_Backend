const express = require('express');
const cors = require('cors');
const connectDB = require('./config/db');
const router = require('./Routes/authRoutes');
const cartRouter = require('./Routes/cartRoutes');

const app = express();

app.use(cors())
app.use(express.json())
app.use("/auth",router)
app.use("/cart",cartRouter)
connectDB()

app.get('/',(req,res)=>{
    res.send(`Hello,World!`)
})
const port = 5000
app.listen(port,()=>{
    console.log(`Server is running on http://localhost:${port}`)
})