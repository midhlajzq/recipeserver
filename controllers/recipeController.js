// import recipe collection/ model 
const recipees =require('../models/recipeSchema')
// get all recipe api


exports.getallrecipe = async (req,res) => {
// logic

// get all products
try{
     const allrecipe = await recipees.find() 
    res.status(200).json(allrecipe)
    }
    catch(error){
        res.status(401).json(error)
    }
}
// view recipe
exports.viewrecipe= async (req,res)=>{
    // get recipe id from request
    const id = req.params.id

    // logic

    
    try{
        // check id is present in mongodb
        const recipe = await recipees.findOne({id})

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