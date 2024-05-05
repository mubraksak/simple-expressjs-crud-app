// improt express into our express program 
const express = require('express');
// importing mongoDB using mongoose
const mongoose = require('mongoose');
// importing product Routes
const productRoute = require("./routes/product.route.js")
// importing product models
const Product = require('./models/product.model.js')


// MiddleWare
const app = express();
// allow the use of json in express
app.use(express.json());
// allow he use of url form encoded
app.use(express.urlencoded({ extended: false }))


//routes
app.use("/api/products", productRoute);



// load first page of the app 
app.get('/', (req, res) => {
    res.send("hello from express js updated twice ")
});



// connecting the mongoDB databse
mongoose.connect('mongodb+srv://mubraksak:Mubsy2846@backenddb.itgjq1o.mongodb.net/Node-API?retryWrites=true&w=majority&appName=backendDB')
    .then(() => {
        console.log('Connected to the database!')
        //creating a port the app will listen to, to run
        app.listen(3000, () => {
            console.log("express is running on 3000")
        });

    })
    .catch(() => {
        console.log('Not Connected to the database!')
    });