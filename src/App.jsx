import { useState } from 'react'
import './App.css'
import searchIcon from './assets/search.png'
import WeatherDetails from './WeatherDetails';
import thunderstormIcon from './assets/scattered-thunderstorms.svg'

function App() {
  const [city, setCity] = useState("Chennai");
  const [loading, setLoading] = useState(false);
  const [cityNotFound, setCityNotFound] = useState(false);
  const [icon, setIcon] = useState(thunderstormIcon)
  const [temp, setTemp] = useState(0);
  const [lat, setLat] = useState(0);
  const [long, setLong] = useState(0);
  const [country, setCountry] = useState("IN");
  const [humidity, setHumidity] = useState(0);
  const [windSpeed, setWindSpeed] = useState(0);
  let api_key= "58a64a8f9b4732f59f35f6736afd4fb2";

  const search = async () => {
      let url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${api_key}&units=Metric`;
      try{
        let resp = await fetch(url);
        let data = await resp.json();
        if(data.cod == "404") {
          setCityNotFound(true);
          setLoading(false);
          console.log("City not Found");
          return;
        }
        setHumidity(data.main.humidity);
        setWindSpeed(data.wind.speed);
        setLong(data.coord.lon);
        setLat(data.coord.lat);
        setCountry(data.sys.country);
        setTemp(Math.floor(data.main.temp));
      }catch (err){
        console.log("An error occured ", err.message);
      }
  }
  const handleEnter =(e) => {
    if(e.key=='Enter'){
      search()}
  }
  return (
    <>
<div className="container">
  <div className="input-container">  
  <input type="text" className="cityInput" 
  placeholder="Search city" value={city} onChange={e=>setCity(e.target.value)} 
  onKeyDown={handleEnter}/>
  {/* onKeyDown={(e)=>handleEnter(e)}/> */}
  {/* both are same */}
  <div className="search-icon">
    <img src={searchIcon} alt="Search" onClick={search}/>
    </div>
  </div>
  <WeatherDetails city={city} loading={loading} cityNotFound={cityNotFound} 
  icon={icon} temp={temp} lat={lat} long={long} country={country}
  humidity={humidity} windSpeed={windSpeed}
  />
  </div>
     </>
  )
}

export default App
