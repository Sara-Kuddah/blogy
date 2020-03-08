// Require necessary NPM packages
const express = require('express');

//Require Mongoose Model for Article
const Article= require('../models/article');

//Instantiate a Router ( mini app thet only handles routes )
const router=express.Router();


/**
 * Action:       INDEX
 * Method:       GET
 * URI:           /api/articales
 * DEscriptin:   Get All Articales
 */

 router.get('/api/articales',(req,res)=>{
    // res.json({
    //     message: 'Get All Articales'
    // });
    Article.find()
    //Return all article as an Array
    .then((allArticles)=>{
        res.status(200).json({articles: allArticles })
    })
    //Catch any errors thet might occur
    .catch((error)=>{
        res.status(500).json({error:error});
    });
 });

//Export the Router so we can use it in server.js file
module.exports=router;

/**
 
function find(cdSuccess,cbError)

 */