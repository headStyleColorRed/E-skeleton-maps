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

#### Vue component

```html
<template>
    <v-autocomplete
        v-model="select"
        :loading="loading"
        :items="items"
        :search-input.sync="search"
        cache-items
        filled
        hide-no-data
        :label="placeholder"
        solo-inverted
        :hint="hint"
        persistent-hint
    />
</template>

<script>
import axios from "axios";
import { debounce } from "lodash";

export default {
    props: {
        placeholder: String,
        baseUrl: String,
        serverIp: String,
        port: String
    },
    data() {
        return {
            loading: false,
            items: [],
            search: null,
            select: null,
            cities: [],
        };
    },
    methods: {
        querySelections: debounce( function (v) {
            this.loading = true;

            try {
                axios
                    .get(`${this.baseUrl}://${this.serverIp}:${this.port}/cities/retrieveCities/${v}`)
                    .then((response) => {
                        this.cities = response.data.data;
                        this.items = this.cities.map((city) => {
                            return `${city.name} - ${city.countryCode}`;
                        });
                    });
            } catch (error) {
                this.$store.commit("showErrorBanner", error.error);
            }
            this.loading = false;
        }, 500),
    },
    computed: {
        hint() {
            if (this.search == null) {
                return "Search for a city";
            } else if (this.items.length > 0 && this.select != undefined) {
                // find the selected item in this.cities
                let selectedCity = this.cities.find((city) => {
                    return `${city.name} - ${city.countryCode}` === this.select;
                });
                return selectedCity.country
            } else {
                return "Loading..."
            }
        },
    },
    watch: {
        search(val) {
            val && val !== this.select && this.querySelections(val);
        },
        select(val) {
            let selectedCity = this.cities.find((city) => {
                    return `${city.name} - ${city.countryCode}` === val;
                });

            this.$emit("citySelected", selectedCity);
        },
    },
};
</script>
```

And in the parent component:

```html
<template>
    <div>
        <CitySelector
            placeholder="Which city are you from?"
            baseUrl="http"
            serverIp="localhost"
            port="8090"
            v-on:citySelected="onCitySelected"
            />
    </div>
```

### Credits
This server was created by [HeadStyleColorRed](https://github.com/headStyleColorRed).

City and country data is provided by the [OpenDataSoft](https://public.opendatasoft.com/explore/?sort=modified) database.

### License
This project is licensed under the [MIT License](https://opensource.org/license/mit/)
