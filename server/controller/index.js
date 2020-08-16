const controller = {
    getAllData: async (req, res) => {
        const data = require("../json/radios.json");
        res.send(data);
    },
    getByContinent: async (req, res) => {
        const data = require("../json/radios.json");
        let { continent } = req.params;
        
        res.send(data["radios"][continent]);
    },
    getByCountry: async (req, res) => {
        const data = require("../json/radios.json");
        let { continent, country } = req.params;
    
        country = country.toUpperCase();
    
        res.send(data["radios"][continent][country]);
    },
    getById: async (req, res) => {
        const data = require("../json/radios.json");
        let { continent, country, id } = req.params;
    
        country = country.toUpperCase();
    
        res.send(data["radios"][continent][country][id]);
    }
}

module.exports = controller;