
export const weatherService = {
    getWeatherApi,
}

function getWeatherApi(lat, lon) {
    const W_KEY = '998238944be226c86c563125d072b417';
    return axios.get(`http://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&APPID=${W_KEY}`)
        .then(res => res.data)
}




