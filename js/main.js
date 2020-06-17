console.log('Main!');

import { locService } from './services/loc.service.js'
import { mapService } from './services/map.service.js'
import { weatherService } from './services/weather.service.js'


locService.getLocs()
    .then(locs => console.log('locs', locs))

window.onload = () => {
    mapService.initMap()
        .then(() => {
            const urlParams = new URLSearchParams(window.location.search);
            const lat = +urlParams.get('lat')
            const lng = +urlParams.get('lng');
            var loc = locService.setLocs(lat, lng)[0];
            changeWindow(loc);
        })
        .catch(console.log('INIT MAP ERROR'));

    locService.getPosition()
        .then(pos => {
            console.log('User position is:', pos.coords);
        })
        .catch(err => {
            console.log('err!!!', err);
        })
}

document.querySelector('.btn-my-location').addEventListener('click', () => {
    locService.getPosition()
        .then(pos => {
            var location = { lat: pos.coords.latitude, lng: pos.coords.longitude };
            changeWindow(location)
        })
})

document.querySelector('.btn-submit').addEventListener('click', () => {
    var address = document.querySelector('[type=text]').value.replace(/\s/g, "+");
    locService.getGeoLocationApi(address).then((location) => changeWindow(location))
    //one marker        
})

document.querySelector('.btn-copy').addEventListener('click', () => {
    locService.getPosition()
        .then(pos => {
            var locationUrl = window.location.href + `?lat=${pos.coords.latitude}&lng=${pos.coords.longitude}`;
            console.log(locationUrl);
        })
})

function changeWindow(location) {
    mapService.panTo(location.lat, location.lng);
    mapService.addMarker(location);
    weatherService.getWeatherData(location.lat, location.lng)
        .then((data) => renderWeather(data))
}

function renderWeather(data) {
    var elWeather = document.querySelector('.weather');
    elWeather.querySelector('.weather-location').innerText = `${data.name}, ${data.weather[0].description}`;

    var currTemp = kelvinToCel(data.main.temp);
    var temp_min = kelvinToCel(data.main.temp_min);
    var temp_max = kelvinToCel(data.main.temp_max);
    elWeather.querySelector('.temp').innerText =
        `${currTemp} tempature, from ${temp_min} to ${temp_max}`;
    elWeather.querySelector('.wind').innerText = `${data.wind.speed} meter/sec`;
}

