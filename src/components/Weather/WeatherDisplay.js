import React, { useEffect, useState } from "react";
import axios from "axios";
import "./Weather.css";

const cities = [
  { id: "NYC", name: "New York City" },
  { id: "LA", name: "Los Angeles" },
  { id: "CHI", name: "Chicago" },
  { id: "HOU", name: "Houston" },
  { id: "PHI", name: "Philadelphia" },
  { id: "PHX", name: "Phoenix" },
  { id: "SAN", name: "San Antonio" },
  { id: "SD", name: "San Diego" },
  { id: "DAL", name: "Dallas" },
  { id: "SANF", name: "San Francisco" },
  { id: "BOS", name: "Boston" },
  { id: "MIA", name: "Miami" },
  { id: "ATL", name: "Atlanta" },
  { id: "DC", name: "Washington, D.C." },
  { id: "DET", name: "Detroit" },
  { id: "SEA", name: "Seattle" },
  { id: "DEN", name: "Denver" },
  { id: "LV", name: "Las Vegas" },
  { id: "MIN", name: "Minneapolis" },
  { id: "NOLA", name: "New Orleans" },
  { id: "PIT", name: "Pittsburgh" },
];

const WeatherDisplay = () => {
  const [city, setCity] = useState("");
  const [weatherReport, setWeatherReport] = useState(null);

  // eslint-disable-next-line react-hooks/exhaustive-deps
  const getReport = async () => {
    try {
      const response = await axios.get(
        `https://api.openweathermap.org/data/2.5/forecast?q=${city}&appid=07097f61fb862a78194329ffa6fa398a`
      );
      setWeatherReport(response.data);
      console.log(response.data);
    } catch (error) {
      console.error(error);
    }
  };
  useEffect(() => {
    if (city) {
      getReport();
    }
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [city]);

  

  return (
    <div>
      <div>
        <select className="weatherDropDown" onChange={(e) => setCity(e.target.value)}>
          <option hidden>Select city</option>
          {cities.map((each) => (
            <option key={each.id}>{each.name}</option>
          ))}
        </select>
      </div>
      <div>
        <div>
          <h1>image</h1>
        </div>
        <div>
          {weatherReport?<div>
             <p>Today</p>
          <h1>{weatherReport.city.name}</h1>
          <h1>temperature<span>{weatherReport&&Math.round(weatherReport.list[0].main.temp-278.3)} c</span></h1>

          </div>:<p>Loading ....</p>}
         
        </div>
      </div>
    </div>
  );
};

export default WeatherDisplay;
