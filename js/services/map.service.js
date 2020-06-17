
export const mapService = {
    initMap,
    addMarker,
    panTo
}


var map;


export function initMap(lat = 32.0749831, lng = 34.9120554) {
    console.log('InitMap');
    return _connectGoogleApi()
        .then(() => {
            console.log('google available');
            map = new google.maps.Map(
                document.querySelector('#map'), {
                center: { lat, lng },
                zoom: 15
            })
            console.log('Map!', map);
        })
}

function addMarker(loc) {
    var marker = new google.maps.Marker({
        position: loc,
        map: map,
        title: 'My location'
    });
    return marker;
}

function panTo(lat, lng) {
    var laLatLng = new google.maps.LatLng(lat, lng);
    map.panTo(laLatLng);
}

function _connectGoogleApi() {
    if (window.google) return Promise.resolve()
    const API_KEY = 'AIzaSyCB4Tvi6pvyUIN1HSBk5TH6X9UkqOJ6Q58'; //TODO: Enter your API Key
    var elGoogleApi = document.createElement('script');
    elGoogleApi.src = `https://maps.googleapis.com/maps/api/js?key=${API_KEY}`;
    elGoogleApi.async = true;
    document.body.append(elGoogleApi);

    return new Promise((resolve, reject) => {
        elGoogleApi.onload = resolve;
        elGoogleApi.onerror = () => reject('Google script failed to load')
    })
}


//AIzaSyCxcNeNliKS4DFy1Ca-ZfJVGG6KkaQy8D0

//     map: 'https://maps.googleapis.com/maps/api/js?key=AIzaSyCxcNeNliKS4DFy1Ca-ZfJVGG6KkaQy8D0&callback=initMap',
//     geoLocationApi: `https://maps.googleapis.com/maps/api/geocode/json?address=1600+Amphitheatre+Parkway,+Mountain+View,+CA&key=AIzaSyCxcNeNliKS4DFy1Ca-ZfJVGG6KkaQy8D0`

