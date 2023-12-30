require('dotenv').config()
const express = require('express')
const mongoose = require('mongoose')
const errorMiddleware = require('./middleware/errorMiddleware')
const User = require('./models/userModel')
const asyncHandler = require('express-async-handler')
const bcrypt = require('bcrypt')
var cors = require('cors')
const Product = require('./models/productModel')

const app = express()

const PORT = process.env.PORT || 3000
const MONGO_URL = process.env.MONGO_URL

app.use(cors())
app.use(express.json())
app.use(express.urlencoded({extended: true}))

//routes

app.get('/', cors(),(req, res) => {
    res.send('Hello NODE API')
})


app.get('/product/:id', asyncHandler(async(req, res) => {

    try {
        const product = await Product.create(req.body)
            res.status(200).json(product);
        
    } catch (error) {
        console.log(error.message)
        res.status(500).json({message: error.message})
    }
    }))

app.post('/product', asyncHandler(async(req, res) => {

try {
    const product = await Product.create(req.body)
        res.status(200).json(product);
    
} catch (error) {
    console.log(error.message)
    res.status(500).json({message: error.message})
}
}));

app.post('/login', asyncHandler(async(req, res) => {

    const {username, password} = req.body
try {

    const check = await User.findOne({username: username})

    if(check &&(await check.matchPassword(password))){
        res.status(200).json("exist");
    }
    else {
        res.status(200).json("notexist");
    }
    
} catch (error) {
    res.status(500);
    throw new Error(error.message);
}
}));


app.post('/signup', asyncHandler(async(req, res) => {

        const {username, password} = req.body
    try {

        const check = await User.findOne({username: username})

        if(check){
            res.status(200).json("exist");
        }
        else {
            //const salt = bcrypt.genSalt();
            const hashedpassword = await bcrypt.hash(req.body.password, 10);
            const user = await User.create({
                username:username,
                password:hashedpassword,
            });

            res.status(200).json("notexist");
        }
        
    } catch (error) {
        res.status(500);
        throw new Error(error.message);
    }
}));

app.use(errorMiddleware);

mongoose.set("strictQuery", false)
mongoose.
connect(MONGO_URL)
.then(() => {
    console.log('connected to MongoDB')
    app.listen(PORT, ()=> {
        console.log(`Node API app is running on port ${PORT}`)
    });
}).catch((error) => {
    console.log(error)
})