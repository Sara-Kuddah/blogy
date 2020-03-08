// Require necessary NPM packages
const mongoose= require('mongoose');

//Define Article Scheme
const articleSchema =new mongoose.Schema({
    title: {type: String ,require :true},
    content : String,
    author: {type: String ,required:true},
    published: {type :Boolean , default:true},
    publishedON: {type:Date ,default:Date.now},
},{
timestamps:true,
});

//Compile our Model based on the Schema
const Article =mongoose.model('Article',articleSchema);

//Eport our Model for use
module.exports=Article;