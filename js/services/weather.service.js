
export const weatherService = {
    initWeather,
}


var weather;

// 

export function initWeather(lat = 32.0749831, lng = 34.9120554) {
    console.log('InitWeather');
    return getWeatherApi()
        .then(() => {
            console.log('Weather available');
            map = new google.maps.Map(
                document.querySelector('#map'), {
                center: { lat, lng },
                zoom: 15
            })
            console.log('Map!', map);
        })
}


function getWeatherApi(onSuccess, lat, lon) {
    const W_KEY = '998238944be226c86c563125d072b417';
    var httpRequest = new XMLHttpRequest();

    httpRequest.onreadystatechange = () => {
        if (httpRequest.readyState === XMLHttpRequest.DONE &&
            httpRequest.status === 200) {
            const teams = JSON.parse(httpRequest.responseText)
            gTeams = teams;
            saveToStorage('Teams', gTeams)
            onSuccess(gTeams);
        }
    }

    httpRequest.open("GET", `http://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&APPID=${W_KEY}`, true);
    httpRequest.send();
}


