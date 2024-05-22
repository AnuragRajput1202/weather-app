const apiKey= "140aa47a94f4389e9c1080a8b141142c";
const apiUrl="https://api.openweathermap.org/data/2.5/weather?units=metric&q=";

let searchBtn = document.querySelector("#search-btn");
let searchBar = document.querySelector("#search-bar");

async function checkWeather(cityName){
    const response= await fetch(apiUrl+`${cityName}&appid=${apiKey}`);
    var data= await response.json();

    document.querySelector("#temp").innerHTML=Math.round(data.main.temp)+"&degC";
    document.querySelector("#loc").innerHTML=data.name;
    document.querySelector("#hum").innerHTML=data.main.humidity+"%";
    document.querySelector("#wind").innerHTML=data.wind.speed+"km/h"
}

searchBtn.addEventListener("click",()=>{
    checkWeather(searchBar.value);
});
searchBar.addEventListener("keypress",(evt)=>{
    if(evt.key==="Enter"){
        checkWeather(searchBar.value);
    }
    
});