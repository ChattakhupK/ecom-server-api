//import
const express = require("express");
const router = express.Router();

//import controllers
const { create, list, remove } = require("../controllers/category");
//import middlewares
const { authCheck, adminCheck } = require("../middlewares/authCheck");

// @ENDPOINT https://ecom-server-api.vercel.app/api/category
router.post("/category", authCheck, adminCheck, create);
router.get("/category", list);
router.delete("/category/:id", authCheck, adminCheck, remove);

module.exports = router;
