const express = require("express")
const router = express.Router()

// Modules

const ValidationManager = require("../tools/validation.js")

router.get("/retrieveCoordinates", async (req, res) => {
    let body = req.body
    let users = null

    // Validation
    let validationResult = ValidationManager.validateDataFields(body, ["username"], "retrieving data");
    if (validationResult.isError)
        return res.status(400).send({ code: validationResult.error, status: validationResult.message });

    try {
        users = await User.find({ username: body.username })
    } catch (err) {
        console.log(err);
        return res.status(400).send({ code: "400", message: "Error retrieving users", data: err })
    }


    res.status(200).send({ code: "200", message: "Success retrieving users", data: user })
});

module.exports = router;
