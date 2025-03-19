import dotenv from "dotenv";
dotenv.config({ path: './.env' }); // Ensure .env file is properly loaded

import connectDB from "./db/index.js";
import app from "./app.js"; // Assuming `app.js` defines an Express app

connectDB()
    .then(() => {
        app.listen(process.env.PORT || 8000, () => {
            console.log(`SERVER IS RUNNING AT PORT: ${process.env.PORT || 8000}`);
        });
    })
    .catch((err) => {
        console.log("MONGO DB CONNECTION FAILED!!!", err);
    });

console.log("MONGODB_URI:", process.env.MONGODB_URI); // Should print the value if loaded correctly
console.log("PORT:", process.env.PORT);


// import mongoose from "mongoose";
// import {DB_NAME } from "./constants";

// function connectDB(){}
// connectDB()






















// import express from "express"
// const app = express()

// (async () => {
//     try{
//       await mongoose.connect(${process.env. MONGODB_URI} /${DB_NAME})
//       app.on("error" , (error) => 
//     {
//         console.log("ERRR", error);
//         throw error 
//     })



//     app.listen(process.env.PORT, () => {
//         console.log(App is listening on port ${process.env.PORT});
//     })
//     }
//     catch (error){
//         console.error("ERROR" , error)
//         throw err
//     }
// }) ()