const express = require("express")
const app = express();
const port = 8090;
const Cors = require("cors")
require('dotenv').config()


// Middelwares
app.use(express.json());
app.use(express.urlencoded({ extended: false }))
app.use(Cors());

app.use("/cities", require("./requests/retrieveCitiesRequests"))
app.use("/countries", require("./requests/retrieveCountriesRequests"))


// Open port
app.listen(8090, () => console.log("Listening on port " + port))

// ++++++++++++++++ HTTP METHODS +++++++++++++++++++ //

app.get("/", (req, res) => {
    res.send("Server is up and running! :D")
  })



