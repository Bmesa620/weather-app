const request = require('request')
const geocode = (address, callback) => {
    const url = 'https://api.mapbox.com/geocoding/v5/mapbox.places/' + address + '.json?access_token=pk.eyJ1IjoiYm1lc2E2MjAiLCJhIjoiY2lodjhtdnRjMDF6bXRza2g2aG02b3YzbSJ9.3EMrDyyNVC0y3qrWmvo4Mw&limit=1'

    request({ url, json:true}, (error, {body}) => {
        if(error){
            callback('unable to connect to mapbox api', undefined)
        } else if(body.features.length === 0){
            callback('invalid location', undefined)
        } else {
            callback(undefined, {
                longitude: body.features[0].center[0],
                latitude: body.features[0].center[1],
                location: body.features[0].place_name
            })
        }
    });
}

module.exports = geocode