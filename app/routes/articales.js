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
router.get('/api/articales/:id',(req,res)=>{
    Article.findById(req.params.id)
    .then((article)=>{
        if(article){
      res.status(200).json({articles:article});
      }else{
        res.status(404).json({
            error:{
                name:'DocumentNotFoundError',
                message:'The provided ID doesn\`t match any documents'
            }
        });
      }
     })
    .catch((error)=>{
        res.status(500).json({error:error});
    });
});


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
router.delete('/api/articales/:id',(req,res)=>{
 Article.findById(req.params.id)
 .then((article)=>{
   if(article){ 
       //Pass the resulte og Mongoose`s .delete method to the next then
       return article.remove();
   }else{
       //if we couldnt fine a document with the matching ID
       res.status(404).json({
           error:{
               name:'DocumentNot FoundError',
               message:'The provided ID Doesn\`t match any documents'
           }
       });
   }
})
   .then(()=>{
//If the deletion succeeded, return 204 and no JSON
 res.status(204).end();
 })

 .catch((error)=>{
    res.status(500).json({error:error});
 });
});


//Export the Router so we can use it in server.js file
module.exports=router;
