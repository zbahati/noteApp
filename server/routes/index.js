const express = require("express");
const noteRouter = express.Router();
const mainController= require('../controllers/mainController')


noteRouter.get('/', mainController.homePage );
noteRouter.get('/about', mainController.aboutPage );
noteRouter.get('*', mainController.pageNotFound );

module.exports = noteRouter;