const mongoose = require('mongoose');
require('dotenv').config();

//! Creating database and connecting to it (Use databaseName)

mongoose.connect(process.env.URL).
then(()=>
{
    console.log("Mongodb Connected SuccessFully")
}).catch((err)=>
{
    console.log(err)
})