const request = require('request')

const forecast = (latitude, longitude, callback) => {
    const url = 'http://api.weatherstack.com/current?access_key=aef463c50f2119b988130891f55ba19e&query='+ latitude + ',' + longitude + '&units=f'
    request({ url, json:true }, (error, {body}) => {
        if(error){
            callback('unable to connect to weather api', undefined)
        } else if(body.error){
            callback('unable to find location', undefined)
        } else {
            let data = body.current;
            callback(undefined, {
                summary: data.weather_descriptions[0],
                temperature: data.temperature,
                feel: data.feelslike,
                humidity: data.humidity
            })
        }
    })
}

module.exports = forecast