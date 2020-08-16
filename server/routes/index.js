const controller = require('../controller/index');
const router = require("express").Router();

router.get("/radios", (req, res) => controller.getAllData(req, res));
router.get("/radios/:continent", (req, res) => controller.getByContinent(req, res));
router.get("/radios/:continent/:country", (req, res) => controller.getByCountry(req, res));
router.get("/radios/:continent/:country/:id", (req, res) => controller.getById(req, res));

module.exports = router;