console.log('Main!');

import { locService } from './services/loc.service.js'
import { mapService } from './services/map.service.js'
import { weatherService } from './services/weather.service.js'


locService.getLocs()
    .then(locs => console.log('locs', locs))

window.onload = () => {
    mapService.initMap()
        .then(() => {

            mapService.addMarker({ lat: 32.0749831, lng: 34.9120554 });
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

document.querySelector('.btn').addEventListener('click', (ev) => {
    console.log('Aha!', ev.target);
    mapService.panTo(35.6895, 139.6917);
})


//lee


weatherService.getWeatherApi(56, 43)
    .then((data) => {
        console.log('lee', data);
        renderWeather(data);
    })

function renderWeather(data) {
    var elWeather = document.querySelector('.weather');
    elWeather.querySelector('.weather-location').innerText = `${data.name}, ${data.weather[0].description}`;
    elWeather.querySelector('.temp').innerText = `${data.main.temp} tempature, from ${data.main.temp_min} to ${data.main.temp_max}`;
}
