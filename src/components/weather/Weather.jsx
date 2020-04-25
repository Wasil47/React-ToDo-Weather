import React, { useState } from "react";
import Conditions from "./Conditions";

const API_KEY = process.env.REACT_APP_WEATHER_API_KEY;
const weatherURL = `http://api.openweathermap.org/data/2.5/weather?q=`;
const keyURL = `&appid=${API_KEY}`;
const units = `&units=metric`;

// api.openweathermap.org/data/2.5/weather?q={city name}&appid={your api key}

function Weather() {
  const [city, setCity] = useState("");
  const [responseObj, setResponseObj] = useState({});
  const [icon, setIcon] = useState();
  const [temp, setTemp] = useState();

  const fullURL = weatherURL + city + keyURL + units;
  const iconURL = `http://openweathermap.org/img/wn/${icon}@2x.png`;


  function handleCityName(e) {
    const cityName = e.target.value;
    setCity(cityName);
  }

  function getWeather(e) {
    e.preventDefault();
    fetch(fullURL)
      .then((res) => res.json())
      .then((data) => {
        setResponseObj(data);
        setTemp(data.main.temp);
        setIcon(data.weather[0].icon);
      });
  }

  return (
    <div>
      <form className="weather-form">
        <input
          onChange={handleCityName}
          name="city"
          placeholder="City"
          value={city}
        />
        <div>
          <img src={iconURL} alt="conditions-img" />
          <h1>{temp} °C</h1>
        </div>
        {/* <Conditions icon={icon} temp={temp} responseObj={responseObj} /> */}

        <button onClick={getWeather}>Set</button>
      </form>
    </div>
  );
}

export default Weather;
