const express = require("express")
const router = express.Router()

// Modules
const CityFileManager = require("../tools/cityFileManager.js")

router.get("/retrieveCities/:city/:count?", async (req, res) => {
    let query = req.params.city;
    let amountToReturn = req.params.count;
    let cities = [];

    if (amountToReturn === undefined) { amountToReturn = 10; }

    try {
        cities = await CityFileManager.retrieveCities(query, amountToReturn);
    } catch (err) {
        console.log(err);
        return res.status(400).send({ code: "400", message: "Error retrieving cities", data: err })
    }


    res.status(200).send({ code: "200", message: "Success retrieving cities", data: cities })
});

router.get("/retrieveCity/:id", async (req, res) => {
    let query = req.params.id;
    let city = null

    try {
        city = await CityFileManager.retrieveCityById(query)
    } catch (err) {
        console.log(err);
        return res.status(400).send({ code: "400", message: "Error retrieving cities", data: err })
    }


    res.status(200).send({ code: "200", message: "Success retrieving city", data: city })
});

module.exports = router;
