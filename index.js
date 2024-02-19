require('dotenv').config()

const express = require('express');
const app = express();

const mongoose = require('mongoose');
const router = require('./router/projectRoute.js')

app.use(express.json())

const connectionString = process.env.MONGO;

const connectToDB = async () => {
    try {
        await mongoose.connect(connectionString)
        console.log("Connected to db")
    } catch (error) {
        console.error(error)
    }
}

app.use("/project", router)

app.listen(4000, () => {
    connectToDB();
    console.log("Listening to port")
});