const express = require("express");
const router = express.Router();

const { getServices } = require("../controller/servicesController");

router.get("/getServices",getServices)










module.exports =router