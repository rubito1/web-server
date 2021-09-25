const request = require('request');

const geocode = (address, callback) => {
    const geocodeUrl = 'https://api.mapbox.com/geocoding/v5/mapbox.places/' + encodeURIComponent(address) + '.json?access_token=pk.eyJ1IjoibWFzaWNhMTUiLCJhIjoiY2t0bjJkZWQzMGhwejJuczhnaDAxdG9nMCJ9.yYuvPdFsACa_LltTmNw_rQ&limit=1';

    request({url: geocodeUrl, json: true}, (error, response) => {
        if(error){
            callback('Unable to connect to location services!')
        }else{      
            callback(undefined, {
                latitude: response.body.features[0].center[1],
                longitude: response.body.features[0].center[0],
                location: response.body.features[0].place_name
            })
        }
       
    })

}

module.exports = geocode;