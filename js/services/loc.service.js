export const locService = {
    getLocs: getLocs,
    getPosition: getPosition,
    getGeoLocationApi
}
var locs = [{ lat: 11.22, lng: 22.11 }]

function getLocs() {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve(locs);
        }, 2000)
    });
}


function getPosition() {
    console.log('Getting Pos');
    return new Promise((resolve, reject) => {
        navigator.geolocation.getCurrentPosition(resolve, reject)
    })
}

function getGeoLocationApi() {
    var address = document.querySelector('[type=text]').value;
    console.log(address);
    address.replace(' ', '+');
    console.log(address);
    // const API_KEY = 'AIzaSyCB4Tvi6pvyUIN1HSBk5TH6X9UkqOJ6Q58'; //TODO: Enter your API Key
    // var api = `https://maps.googleapis.com/maps/api/geocode/json?address=1600+Amphitheatre+Parkway,+Mountain+View,+CA&key=${API_KEY}`;


    // return new Promise((resolve, reject) => {
    //     elGoogleApi.onload = resolve;
    //     elGoogleApi.onerror = () => reject('Google geolocation failed to load')
    // })
}
