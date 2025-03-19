const express = require('express')
const { addToCart, getCart, removeFromCart } = require('../Controllers/cartController')
const authMiddleware = require('../middleware/authMiddleware')
const cartRouter = express.Router()

cartRouter.post("/add",authMiddleware,addToCart)
cartRouter.get("/",authMiddleware,getCart)
cartRouter.post("/remove",authMiddleware,removeFromCart)

module.exports=cartRouter