import {updateData} from './js/updateData.js'
import axios from 'axios';

const apiKey = "d865f40a995be1311f0b106a8c307587";

document.getElementById("searchButton").addEventListener("click", () => {
    
    let inputCity = document.getElementById("inputBox").value;
    axios
        .get(`http://api.openweathermap.org/data/2.5/forecast?q=${inputCity}&appid=${apiKey}&units=metric`)
        .then((response) => updateData(response.data))
        .catch((err) => console.log(err));
});



const dates = new Date();
console.log(dates);

