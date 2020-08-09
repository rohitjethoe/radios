const express = require('express');

const router = express.Router();

router.get('/radios', (req, res) => {
    const data = require('../json/radios.json');

    res.send(data)
})

router.get('/radios/:country', (req, res) => {
    const data = require('../json/radios.json');
    let country = req.params.country;

    country = country.toUpperCase();

    res.send(data['radios'][country]);
})

module.exports = router;