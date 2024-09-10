
require('dotenv').config();
const express = require('express');
const mongoose = require('mongoose');
const foodCenterRoutes = require('./Routers/FoodCenter_API');
const ownerInfoRoutes = require('./Routers/OwnerInfo_API');

const app = express();
app.use(express.json());

// Connect to Mongodb 
const mongoString = process.env.DATABASE_URL;
mongoose.connect(mongoString);
const database = mongoose.connection;
database.on('error', (error) => {
    console.log(error)
})
database.once('connected', () => {
    console.log('Database Connected');
})

//use routers
app.use('/foodcenter', foodCenterRoutes);
app.use('./ownerinfo', ownerInfoRoutes);


app.listen(6000, () => {
    console.log(`Server Started at ${6000}`)
})

