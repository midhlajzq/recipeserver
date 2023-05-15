// to define routes for client request , create routes folder and router.js file
// import express
const express = require('express')
// import recipeController
const recipeController = require('../controllers/recipeController')
const favouriteController = require('../controllers/favouriteController')

// using  express create object for router class inorder to setup path

const router = new express.Router()


// resolve client request in various server routes

// api

// get-all-recipes
router.get('/recipees/all-recipes',recipeController.getallrecipe)
// view-Recipe
router.get('/recipees/view-product/:id',recipeController.viewrecipe)
// add to favourite
router.post('/favourite/add-product',favouriteController.addfavourites)
// get favourites
router.get('/favourite/all-favourite',favouriteController.getfavourite)
// remove favourites
router.delete('/favourite/remove-item/:id',favouriteController.removefromfavourite)
router.get('/favourite/favourite-view/:id',favouriteController.favouriteview)

// export router
module.exports = router