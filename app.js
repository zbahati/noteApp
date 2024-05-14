require('dotenv').config();
const express = require("express");
const expresEjsLayout = require("express-ejs-layouts");
const app = express();

// static files 

app.use(express.static('public'));

// middleware 
app.use(express.json());
app.use(express.urlencoded({extended: true}));

// Templating engine
app.use(expresEjsLayout);
app.set('layout', 'layouts/main')
app.set('view engine', 'ejs')

// routes
app.use('/', require('./server/routes/index'))

// server 
const PORT = process.env.PORT || 8000
app.listen(PORT, ()=> {
    console.log(`Server is running on the port ${PORT}`)
})