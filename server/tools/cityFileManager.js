const fs = require("fs");

async function retrieveCities(query, amountToReturn) {
    // Prevent returning more than 50 cities
    if (amountToReturn > 50) { amountToReturn = 50; }

    return new Promise((resolve, reject) => {
        fs.readFile("./server/assets/cities.json", (err, data) => {
            if (err) {
                reject(err);
            } else {
                let cities = JSON.parse(data);
                let filteredCities = cities.filter(city => city.name.toLowerCase().includes(query.toLowerCase())).slice(0, amountToReturn);
                filteredCities = filteredCities.map(city => {
                    return {
                        name: city.name,
                        country: city.label_en,
                        coordinates: city.coordinates
                    }
                });

                resolve(filteredCities);
            }
        });
    });
}

module.exports = {
    retrieveCities,
};
