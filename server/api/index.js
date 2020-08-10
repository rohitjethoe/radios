const express = require('express');

const router = express.Router();

router.get('/radios', (req, res) => {
    const data = require('../json/radios.json');

    res.send(data)
})

router.get('/radios/:continent/', (req, res) => {
    const data = require('../json/radios.json');
    let continent = req.params.continent;

    res.send(data['radios'][continent]);
})

router.get('/radios/:continent/:country', (req, res) => {
    const data = require('../json/radios.json');
    let continent = req.params.continent;
    let country = req.params.country;

    country = country.toUpperCase();

    res.send(data['radios'][continent][country]);
})

module.exports = router;