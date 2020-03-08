
// Creating a base name for the MongoDB
const mongooseBaseName ='blogy';
//create the MongoDB URI for Development and test 
const database = {
    development:`mongodb://localhost/${mongooseBaseName}-development`,
    test:`mongodb://localhost/${mongooseBaseName}-test`,
}
//Identify if development environment is test or Development 
//select DB based on wether a test file was exexecuted before `server
const localDB=process.env.TESTENV? database.test : database.development;
//Environment variable MONGODB_URL will be availabe in 
//Heroku production environment, otherwise use test or Development 
const currentDB = process.env.MONGODB_URL || localDB;
//export the appropriate database based on the current environment
module.exports=currentDB;










// //Createing a base name for mongoDB
// const nongooseBaseName ='blogy';

// //blogy-devlopment
// //blogy-test

// //Create the MongoDB URI for devolopmenr and test 
// const database ={
//     devlopment: `mongodb://localhost/${nongooseBaseName}-development`,
//     test:`mongodb://localhost/${nongooseBaseName}-test`,
// }

// //Identifu if devolopment enviroment is Test or Development 
// //select DB based on wether a test file was executed befor server
// const localDB= process.env.TESTENV ? database.test : database.env.devlopment;

// //
// //
// const currentDB = process.envMONGODB_URI || localDB;

// //Export the appropriate database based on teh current envirment
// module.exports=currentDB;




