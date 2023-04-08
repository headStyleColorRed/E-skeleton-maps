## Cities and Countries data

This Node.js server provides a REST API for accessing data about cities, countries, and coordinates. The server uses the Express.js framework and data from the GeoNames database.

### Installation
1. Clone this repository to your local machine.
2. Install Node.js and npm if you haven't already.
3. Run `npm install` to install the project dependencies.

### Usage
1. Run `npm start` to start the server.
2. Access the API endpoints at `http://localhost:8090`

### API endpoints
#### `GET cities/retrieveCities/:query`
Returns a list of city objects for the specified query. Each city object includes the following properties:

```json
{
    "geoname_id": "2637627",
    "name": "Slough",
    "ascii_name": "Slough",
    "alternate_names": [
        "Slau",
        "Slough",
        "\u0421\u043b\u0430\u0443"
    ],
    "feature_class": "P",
    "feature_code": "PPLA2",
    "country_code": "GB",
    "cou_name_en": "United Kingdom",
    "country_code_2": null,
    "admin1_code": "ENG",
    "admin2_code": "M1",
    "admin3_code": null,
    "admin4_code": null,
    "population": 164793,
    "elevation": null,
    "dem": 33,
    "timezone": "Europe/London",
    "modification_date": "2023-02-26",
    "label_en": "United Kingdom",
    "coordinates": {
        "lon": -0.59541,
        "lat": 51.50949
    }
}
```

#### `GET /countries:query`
Returns a list of all countries in the GeoNames database. Each country object includes the following properties:t.

### Credits
This server was created by [HeadStyleColorRed](https://github.com/headStyleColorRed).
City and country data is provided by the [OpenDataSoft](https://public.opendatasoft.com/explore/?sort=modified) database.

### License
This project is licensed under the [MIT License](https://opensource.org/license/mit/)
