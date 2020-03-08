// Require necessary NPM packages
const express = require('express');
const mongoose= require('mongoose');

// Instantite Express App Obj
const app= express();

//Difie the PORT for API to run on
const port =process.env.PORT || 5000;

//Stat the server  to l
app.listen(port,()=>{
    console.log(`blogy is listening on port ${port}`);
});