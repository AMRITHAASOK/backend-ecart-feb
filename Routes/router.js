//To define routes for the client request

//import express
const express=require('express');

//import productController
const productController = require('../Controllers/productController')

//import wishlistController
const  wishlistController=require('../Controllers/wishlistController')

//import cartController
const cartController = require('../Controllers/cartController')

//using express create an object for router class inorder to setup path
const router = new express.Router();

//resolve various client request 

//api call

//1 get all products
router.get('/products/allProducts',productController.getallproducts)

//2 view particular product details
router.get('/products/viewProduct/:id',productController.viewproduct)


//3 add to wishlist
router.post('/products/addtowishlist',wishlistController.addtowishlist)

//4 get wishlist details
router.get('/products/getwishlist',wishlistController.getwishlist)

//5 delete wishlist product
router.delete('/products/deletewishlist/:id',wishlistController.deletewishlist)

//6 addtocart
router.post('/products/addtocart',cartController.addtocart)

//7. get cart products
router.get('/products/getcart',cartController.getcart)

//8 delete cart products
router.delete('/products/deletecart/:id',cartController.delete)

//9 increment cart count
router.get('/products/increment/:id',cartController.incrementCartItems)

//9 decrement cart count
router.get('/products/decrement/:id',cartController.decrementCartItems)


//export router
module.exports = router