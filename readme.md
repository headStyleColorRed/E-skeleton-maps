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

#### Header
All requests must include the following header:
```json
{
    "authorization": "a-secure-token"
}
```

#### `GET /retrieveCities/:city/:count?`
Returns a list of city objects for the specified query.
It will default to 10 results if no count is specified, with a maximum of 50 results.
Each city object includes the following properties:

```json
{
    "name": "Slough",
    "country": "United Kingdom",
    "coordinates": {
        "lon": -0.59541,
        "lat": 51.50949
    }
}
```

### Credits
This server was created by [HeadStyleColorRed](https://github.com/headStyleColorRed).
City and country data is provided by the [OpenDataSoft](https://public.opendatasoft.com/explore/?sort=modified) database.

### License
This project is licensed under the [MIT License](https://opensource.org/license/mit/)
