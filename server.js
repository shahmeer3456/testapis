import mongoose from "mongoose";
import express from "express";
import bodyParser from "body-parser";
import dotenv from "dotenv";

const app = express();

// Middlewares
app.use(bodyParser.json());
dotenv.config();

const PORT = process.env.PORT || 8000;
const mongourl = process.env.mongourl;

mongoose.connect(mongourl)
    .then(() => {
        console.log("Database is connected successfully");
        app.listen(PORT, () => {
            console.log(`Server is running on port ${PORT}`);
        });
    })
    .catch((err) => {
        console.log("Error connecting to the database:", err);
    });
