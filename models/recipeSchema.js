const mongoose = require('mongoose')

// derfine schema for recipes collection to store data
// const recipeSchema= mongoose.Schema({
//     id:{
//         type:Number,
//         required:true,
//         unique:true
//     },
//     name:{
//         type:String,
//         required:true
//     },
//     ingredients:{
//         type:String,
//         required:true
//     },
//     directions:{
//         type:String,
//         required:true
//     },
//     image:{
//         type:String,
//         required:true
//     }
// })
const recipeSchema= mongoose.Schema({
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
const recipees= new mongoose.model("recipees",recipeSchema)
// export the model
module.exports= recipees