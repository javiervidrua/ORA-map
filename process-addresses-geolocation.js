let geolocations = require('./addresses_geolocation_v2')

for (let location in geolocations) {
    console.log(`[${geolocations[location][0].lat},${geolocations[location][0].lon}],`)
}