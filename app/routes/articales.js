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

 /**
 * Action:       SHOW
 * Method:       GET
 * URI:           /api/articales/5d66b8b68b
 * DEscriptin:   Get An Articale by Articale ID
 */


 /**
 * Action:       CREATE
 * Method:       POST
 * URI:           /api/articales
 * DEscriptin:   Create A New Articale 
 */
router.post('/api/articales',(req,res)=>{
    // res.json({message: 'cool',q:42 ,data: req.body.article});  we know i is work
    Article.create(req.body.article)
    //On a successful `create` action, respond wuth 201
    //HTTP status and the content of the new article
   .then((newArticle)=>{
        res.status(201).json({article:newArticle});
    })
    //Catch any errors that might occur
    .catch((error)=>{
        res.status(500).json({error:error});
    });
});
 /**
 * Action:       UPDATE
 * Method:       PATCH
 * URI:          /api/articales/5d66b8b68b
 * DEscriptin:   Update An Articale  by Article ID
 */

  /**
 * Action:       DESTROY
 * Method:       DELETE
 * URI:          /api/articales/5d66b8b68b
 * DEscriptin:   Delete An Articale  by Article ID
 */

//Export the Router so we can use it in server.js file
module.exports=router;

/**
 
function find(cdSuccess,cbError)

 */