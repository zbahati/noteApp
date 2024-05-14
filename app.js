require('dotenv').config();
const express = require("express");
const expresEjsLayout = require("express-ejs-layouts");


const app = express();

// middlewares 
app.use(expresEjsLayout);
app.set(express.static('public'))
app.set('layout', 'layouts/main')

const PORT = process.env.PORT || 8000
app.listen(PORT, ()=> {
    console.log(`Server is running on the port ${PORT}`)
})