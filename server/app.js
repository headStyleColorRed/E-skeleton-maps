const express = require("express")
const app = express();
const port = 8090;
const Cors = require("cors")
require('dotenv').config()


// Middelwares
app.use(express.json());
app.use(express.urlencoded({ extended: false }))
app.use(Cors());

// TOKEN VERIFICATION
app.use((req, res, next) => {
    if (process.env.NODE_ENV !== 'production') { return next() };

    const token = req.headers.authorization;

    if (token !== process.env.TOKEN) {
        return res.status(401).json({
            code: 401,
            message: 'Invalid token',
            data: null
        });
    }

    next();
});

// Routes
app.use("/cities", require("./requests/retrieveCitiesRequests"))
app.use("/countries", require("./requests/retrieveCountriesRequests"))

// Open port
app.listen(8090, () => console.log("Listening on port " + port))

// ++++++++++++++++ HTTP METHODS +++++++++++++++++++ //

app.get("/", (req, res) => {
    res.send("Server is up and running! :D")
})



