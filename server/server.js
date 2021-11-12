const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
const bodyParser = require('body-parser');
require('dotenv').config()

//import routes
const authRoutes = require('./routes/auth');
const { db } = require('./models/user');

//app
const app = express();

// DB Config
// const DB = require("./config/keys").mongoURI;

// db
mongoose
    .connect(process.env.DATABASE, {
        useNewUrlParser: true,
        useUnifiedTopology: true
    })
    .then(() => console.log('DB Connected'));

//middlewares
app.use(bodyParser.json());
app.use(cors());

//routes middleware
app.use('/api', authRoutes);
const port =  5000;
app.listen(port, () => {
    console.log(`Server is running on ${port}`)
});