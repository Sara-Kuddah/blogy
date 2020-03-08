// Require necessary NPM packages
const express = require('express');
const mongoose= require('mongoose');

//Require Route Files
const indexRouter =require('./app/routes/index');
const articalesRouter =require('./app/routes/articales')

//Require DB Configuration File
const db=require('./config/db');

//Establish Database Connection
mongoose.connect(db);
mongoose.connection.once('open',()=>{
    console.log('Connect to Mongo');
});

// Instantite Express App Obj
const app= express();

//Difie the PORT for API to run on
const port =process.env.PORT || 5000;


/***Middleware***/

//add `bodyParser` middleware which will prase JSON requests
//into JS objects before thay reach the route file
//
//The method `.use `  sets up middleware for the express application
app.use(express.json());

/**Routes */
//Mount imported Routers
app.use(indexRouter);
app.use(articalesRouter);

//Stat the server  to listen for requsts on a given port
app.listen(port,()=>{
    console.log(`blogy is listening on port ${port}`);
});

