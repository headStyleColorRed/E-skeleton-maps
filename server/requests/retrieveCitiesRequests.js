const express = require("express")
const router = express.Router()
const zlib = require("zlib");

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
        return res.status(400).send({ code: "400", message: "Error retrieving users", data: err })
    }


    res.status(200).send({ code: "200", message: "Success retrieving cities", data: cities })
});

module.exports = router;
