const express = require("express");
const router = express.Router();
const  {authentication} = require("../authentication/auth")

const {signUp,signIn,updateUser,getUserDetails}  = require("../controller/adminController");
const { createService,getServices } = require("../controller/servicesController");
const { uploadPhotos, getPhotos } = require("../controller/galleryController");

router.post("/sign", signUp)
router.post("/sign", signIn)
router.get("/getuser", authentication, getUserDetails)
router.put("/updateuser", authentication, updateUser)


router.post("/createService", authentication, createService)


router.get("/getServices", getServices)




router.post("/uploadPhotos", authentication, uploadPhotos)
router.get("/getPhotos",authentication,getPhotos)

module.exports =router