const express = require("express");
const router = express.Router();
const homeController = require("../controllers/homeController");

router.get("/app", homeController.index);


module.exports = router; // Ensure you are exporting the router correctly
