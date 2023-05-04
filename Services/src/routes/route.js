const express = require("express");
const router = express.Router();

const { getServices } = require("../controller/servicesController");
const { getPhotos } = require("../controller/galleryController");
const { createAppointement } = require("../controller/appointementController");

router.get("/getServices",getServices)
router.get('/getPhotos', getPhotos)
router.post ("/createAppontments",createAppointement)









module.exports =router