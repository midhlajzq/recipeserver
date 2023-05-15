const mongoose=require('mongoose')

const favouriteSchema= mongoose.Schema({
    id:{
        type:Number,
        required:true,
        unique:true
    },
    name:{
        type:String,
        required:true
    },
    ingredients:{
        type:String,
        required:true
    },
    directions:{
        type:String,
        required:true
    },
    image:{
        type:String,
        required:true
    }
    
})

// create model to store recipe
const favourite= new mongoose.model("favourite",favouriteSchema)
// export the model
module.exports= favourite