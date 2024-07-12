// importing 
const express = require('express');
const morgan = require("morgan");
const cors = require ("cors");
const cookieParser = require("cookie-parser");
//const { PORT }= require("./config/index.js");
//const { db } =require("./database");

//const { router } = require('./routers/authentication.routers.js');

// entities must to be with db.sync() function to create the table
//const { User } = require('./entities/users.entities.js');
//const { ErrorMiddleware } = require('./middlewares/errors.middlewares.js');


class App {
    
    constructor() {
        // create an express application    
        this.app = express();
        this.port = 3001;
       // this.connectToDatabase();
        //this.initializeMiddlewares();
        //this.initializeRoutes();
        //this.initializeErrorHandling();
 }

 listen() {
    this.app.listen(this.port, () => {
      console.log("=================================");
      console.log(`🚀 App is listening on the port: ${this.port}`);
      console.log("=================================");
    });
  }


async connectToDatabase() {
  try {
        await db.authenticate();     // Test the database connection 
        console.log('Connection to the database has been established successfully.');
        await db.sync();             // Synchronize models with the database
        console.log('Database synchronization complete.');
  } catch (error) {
        console.error('Unable to connect to the database:', error);
  }
}


  initializeMiddlewares() {
    this.app.use(morgan('dev'));    // a middleware that logs the request details
    this.app.use(express.json());   // a middleware that used to parse json requests
    this.app.use(cookieParser());   // a middleware used to parse cookies
    this.app.use(cors()); // a middleware that alow cors (requests from other hosts )
    this.app.use((req,res,next)=> {    // next() should be provided in order to go to next middleware
      console.log("we got reqqq");
      next();
    })
  }
  
  initializeRoutes() {
    this.app.use("", router);
  }

  initializeErrorHandling() {
    this.app.use(ErrorMiddleware);
  }
}





module.exports = { App };
