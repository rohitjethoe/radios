const router = require("express").Router();

router.get("/radios", (req, res) => {
    const data = require("../json/radios.json");
    res.send(data);
});

router.get("/radios/:continent/", (req, res) => {
    const data = require("../json/radios.json");
    let { continent } = req.params;
    
    res.send(data["radios"][continent]);
});

router.get("/radios/:continent/:country", (req, res) => {
    const data = require("../json/radios.json");
    let { continent, country } = req.params;

    country = country.toUpperCase();

    res.send(data["radios"][continent][country]);
});

router.get("/radios/:continent/:country/:id", (req, res) => {
    const data = require("../json/radios.json");
    let { continent, country, id } = req.params;

    country = country.toUpperCase();

    res.send(data["radios"][continent][country][id]);
});

module.exports = router;