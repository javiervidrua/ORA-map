let geolocations = require('./geolocations')

for (let location in geolocations) {
    // If no possibility contains a zip code, we take the first one
    if (!JSON.stringify(geolocations[location]).includes(", 370")) {
        console.log(`[${geolocations[location][0].lat},${geolocations[location][0].lon},"${geolocations[location][0].display_name}"],`)
    }
    // Otherwise, we check each one
    else {
        for (let possibility in geolocations[location]) {
            if (geolocations[location][possibility].display_name.includes(", 370")) {
                console.log(`[${geolocations[location][possibility].lat},${geolocations[location][possibility].lon},"${geolocations[location][possibility].display_name}"],`)
                break
            }
        }
    }
}