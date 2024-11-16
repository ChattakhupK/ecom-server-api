//import
const express = require("express");
const router = express.Router();

//import controllers
const { register, login, currentUser } = require("../controllers/auth");
//import Middleware
const { adminCheck, authCheck } = require("../middlewares/authCheck");

//@ENDPOINT https://ecom-server-api.vercel.app/api/register
router.post("/register", register);
router.post("/login", login);
router.post("/current-user", authCheck, currentUser);
router.post("/current-admin", authCheck, adminCheck, currentUser);

module.exports = router;
