const dotenv = require('dotenv').config();

module.exports= {

     domain :process.env.IP || "localhost" ,
     port : process.env.PORT,
     jwt_secret : process.env.JWT_SECRET
     
}