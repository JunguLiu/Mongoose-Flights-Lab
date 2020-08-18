var express = require("express");
var router = express.Router();
const flightCtrl = require("../controllers/flights");

/* GET home page. */
router.get("/", flightCtrl.find);
router.get("/add", flightCtrl.add);
router.post("/", flightCtrl.create);
router.get("/:id", flightCtrl.detail);
router.post("/:id", flightCtrl.createDest);
router.get("/ticket/:id", flightCtrl.addTicket);
router.post("/ticket/:id", flightCtrl.createTicket);
module.exports = router;
