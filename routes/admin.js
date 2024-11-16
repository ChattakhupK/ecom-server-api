//import
const express = require("express");
const { authCheck } = require("../middlewares/authCheck");
const router = express.Router();

//import controller
const { changeOrderStatus, getOrderAdmin } = require("../controllers/admin");

//@ENDPOINT https://ecom-server-api.vercel.app/api/admin
router.put("/admin/order-status", authCheck, changeOrderStatus);
router.get("/admin/orders", authCheck, getOrderAdmin);


module.exports = router;
