const express = require("express");
const router = express.Router();
const  {authentication} = require("../authentication/auth")

const {signUp,signIn,updateUser,getUserDetails}  = require("../controller/adminController");

router.post("/sign", signUp)
router.post("/sign", signIn)
router.get("/getuser", authentication, getUserDetails)
router.put("/updateuser", authentication, updateUser)





module.exports =router