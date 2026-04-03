async function getVancouverWeather () {
    const response = await fetch(`https://wttr.in/Paris?format=j1`)
    const weatherInfo = await response.json()
    
    console.log(weatherInfo)
    if (weatherInfo === null) {
        return
    }

    const cityBox = document.querySelector("#location-city")
    const countryBox = document.querySelector("#location-country")

    cityBox.innerText = weatherInfo.nearest_area[0].areaName[0].value
    countryBox.innerText = weatherInfo.nearest_area[0].country[0].value

    const weatherDescriptionBox = document.querySelector("#weather-description")
    weatherDescriptionBox.innerText = weatherInfo.current_condition[0].weatherDesc[0].value

    const temperatureBox = document.querySelector("#temperature-celsius")
    temperatureBox.innerText = weatherInfo.current_condition[0].temp_C + `°C`
}

getVancouverWeather()