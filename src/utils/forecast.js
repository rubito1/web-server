const request = require('request');

const forecast = (latitude, longitude, address, callback) => {
    const url = 'http://api.weatherstack.com/current?access_key=d9053db48be8be973a143cc174300b5b&query=' + encodeURIComponent(address);

    request({url: url, json: true}, (error, response) => {
        if (error) {
            callback(error, undefined);
        } else {
            console.log(url);
            callback(undefined, response.body.current);
        }      
    })
}

module.exports = forecast;