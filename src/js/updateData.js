import {tempAvg} from "./tempAvg.js"

export const updateData = (data) => {
    console.log(data);
    let dayAvg = tempAvg(data);

    document.getElementById("img0").src = `https://openweathermap.org/img/wn/${data.list[0].weather[0].icon}@2x.png`;
    document.getElementById("cityName").innerHTML = data.city.name;
    document.getElementById("desc0").innerHTML = data.list[0].weather[0].description;
    document.getElementById("temp0").innerHTML = `Now:   ${Math.round(data.list[0].main.temp)}  °C`;
    document.getElementById("feel0").innerHTML = `Feels Like:   ${Math.round(data.list[0].main.feels_like)}  °C`;
    document.getElementById("avgBox0").innerHTML = `Day Avarage:   ${dayAvg[0]}  °C`;
    document.getElementById("humidity0").innerHTML = `Humidity:  % ${Math.round(data.list[0].main.humidity)}`;
    
    for (let i = 1; i < 5; i++) {
        document.getElementById(`img${i}`).src = `https://openweathermap.org/img/wn/${data.list[i * 8 - 1].weather[0].icon}@2x.png`;
        document.getElementById(`desc${i}`).innerHTML = data.list[i * 8 - 1].weather[0].description;
        document.getElementById(`avgBox${i}`).innerHTML = `Average:   ${dayAvg[i]}  °C`;}
        
};