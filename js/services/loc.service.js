export const locService = {
    getLocs: getLocs,
    getPosition: getPosition,
    getGeoLocationApi,
    setLocs
}
 var locs = [{ lat: 11.22, lng: 22.11 }]

function setLocs(lat, lng) {
    // var locs = [{ lat: 11.22, lng: 22.11 }]
    if (lat && lng) locs = [{ lat: lat, lng: lng }];
    return locs;
}

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

function getGeoLocationApi(address) {
    const API_KEY = 'AIzaSyCB4Tvi6pvyUIN1HSBk5TH6X9UkqOJ6Q58';
    var api = `https://maps.googleapis.com/maps/api/geocode/json?address=${address}+CA&key=${API_KEY}`;
    return axios.get(api)
        .then(res => res.data.results[0].geometry.location)
}
