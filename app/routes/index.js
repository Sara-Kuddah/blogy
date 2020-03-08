// Require necessary NPM packages
const express = require('express');
// const mongoose= require('mongoose');

//Instantiate a Router ( mini app thet only handles router )
const router=express.Router();

/**
 * Action:       INDEX
 * Method:       GET
 * URI:            /
 * DEscriptin:   Get the Root Route
 */
router.get('/',(req,res)=>{
    res.json({
        message: 'Welocm to blogy'
    });
});

//Export the Router so we can use it in server.js file
module.exports=router;
