const favourite= require('../models/favouriteSchema')
// add to favourites
exports.addfavourites = async (req,res) => {
    // get product details from request
    // using destructuring
    const {id,name,ingredients,directions,image}=req.body
    // logic
    try{
        // check product in wihlist
        const item = await favourite.findOne({id})
        if(item){
            res.status(402).json("Item Already in your Favourites")
        }
        else{
            // add item to favourite
            const newrecipe = new favourite({
                id,name,ingredients,directions,image
            })
            // to store
            await newrecipe.save()
            res.status(200).json("Item added to your Favourites")
        }
    }
    catch(error){
        res.status(401).json(error)
    }
}



exports.getfavourite = async (req,res) => {
    // logic
    
    // get all products
    try{
         const favourites = await favourite.find() 
        res.status(200).json(favourites)
        }
        catch(error){
            res.status(401).json(error)
        }
    }
    // to remove item
    exports.removefromfavourite=async (req,res)=>{
        // get id from request
        const {id}=req.params
    
        // remove id from wishlist collection
        try{
            const removeitem=await favourite.deleteOne({id})
            if(removeitem){
                // get all wishlist item after removing particular item
                const allitems= await favourite.find()
                res.status(200).json(allitems)
    
            }
            else{
                res.status(401).json('Item not present in your wishlist')
            }
    
        }
        catch(error){
            res.status(401).json(error)
        }
    }
    // favourite view
    exports.favouriteview= async (req,res)=>{
        // get recipe id from request
        const id = req.params.id
    
        // logic
    
        
        try{
            // check id is present in mongodb
            const recipe = await favourite.findOne({id})
    
            if(recipe){
                // send to client
                res.status(200).json(recipe)
            }
            else{
                res.status(401).json("Recipe not found")
            }
    
        }
        catch(error){
    
        }
    }