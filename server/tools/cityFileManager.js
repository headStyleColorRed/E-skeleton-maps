const fs = require("fs");
const zlib = require("zlib");

async function retrieveCities(query, amountToReturn) {
    // Prevent returning more than 50 cities
    if (amountToReturn > 50) { amountToReturn = 50; }

    return new Promise((resolve, reject) => {
        const readStream = fs.createReadStream("./server/assets/cities.json.gz");
        const gunzip = zlib.createGunzip();
        const jsonString = [];

        readStream.pipe(gunzip)
            .on("data", (chunk) => {
                jsonString.push(chunk.toString());
            })
            .on("end", () => {
                const json = JSON.parse(jsonString.join(""));
                const filteredCities = json.filter(city => city.name.toLowerCase().includes(query.toLowerCase())).slice(0, amountToReturn)
                    .map(city => {
                        return {
                            name: city.name,
                            country: city.label_en,
                            coordinates: city.coordinates
                        }
                    });
                resolve(filteredCities);
            })
            .on("error", (err) => {
                reject(err);
            });
    });
}

module.exports = {
    retrieveCities,
};
