//import wishlistSchema
const wishlists=require('../model/wishlistSchema')

//logic for wishlist
//add product to wishlist
exports.addtowishlist=async(req,res)=>{
    //get specific product details from the request

    // req.body={
    //     "id":"123",
    //     "title":"Backpack",
    //     "price":"1233"
    // }

    //js destructuring 

    const {id,title,price,image} = req.body

    //logic for wishlist
    try{
        //check if product is already in wishlist
        const item = await wishlists.findOne({id})
        if(item){
            res.status(401).json("Item already in wishlist")
        }
        else{
            //product is added to wishlist
            const newProduct = await wishlists({id,title,price,image})
            //to store in db
            await newProduct.save()
            res.status(200).json("Item added to wishlist")//response send back to client
        }
    }
    catch(error){
        res.status(404).json(error)
    }

}

//get wishlist products from db
exports.getwishlist=async(req,res)=>{
    try{
        //logic
        //get all products from wishlist collection
        const allwishlist=await wishlists.find()
        res.status(200).json(allwishlist)//response send back to client
    }
    catch(error){
        res.status(404).json(error)//error response
    }
}

//delete wishlist products from db
exports.deletewishlist=async(req,res)=>{
    //get particular product id
    const {id}=req.params
    try{
        //logic
        //delete wishlist products 
        const removewishlist=await wishlists.deleteOne({id})
        if(removewishlist){
            //get all wishlist products after removing particular product
            const remainingwishlist=await wishlists.find()
            res.status(200).json(remainingwishlist)//response send back to client
        }
    }
    catch(error){
        res.status(404).json(error)//error response
    }
}