import { useState } from 'react'
import './App.css'
import searchIcon from './assets/search.png'
import WeatherDetails from './WeatherDetails';

function App() {
  const [searchCity, setSearchCity] = useState("");
  const [city, setCity] = useState("");
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");
  const [cityNotFound, setCityNotFound] = useState(false);
  const [icon, setIcon] = useState("")
  const [temp, setTemp] = useState(0);
  const [lat, setLat] = useState(0);
  const [long, setLong] = useState(0);
  const [country, setCountry] = useState("IN");
  const [humidity, setHumidity] = useState(0);
  const [windSpeed, setWindSpeed] = useState(0);

  let api_key= "58a64a8f9b4732f59f35f6736afd4fb2";

  const search = async () => {
      setLoading(true);
      setError("")
      setCityNotFound(false)
      let url = `https://api.openweathermap.org/data/2.5/weather?q=${searchCity}&appid=${api_key}&units=Metric`;
      let data;
      try{
        let resp = await fetch(url);
        data = await resp.json();
        if(data.cod == "404") {
          setCityNotFound(true);
          setLoading(false);
          return;
        }
        if(data.cod == "200")
          {setHumidity(data.main.humidity);
            setWindSpeed(data.wind.speed);
            setLong(data.coord.lon);
            setLat(data.coord.lat);
            setCountry(data.sys.country);
            setTemp(Math.floor(data.main.temp));
            setIcon(data.weather[0].icon);
            setCity(data.name)
            setCityNotFound(false);
            setLoading(false);}
      }catch(err){
        console.error("An error occured ", err.message);
        setError(err.message)
      }
  }
  const handleEnter =(e) => {
    if(e.key=='Enter' && searchCity){
      search()}
  }
  const handleClick =(e) => {
    if(searchCity){
      search()}
  }
  return (
    <>
<div className="container">
  <div className="input-container">  
  <input type="text" className="cityInput" 
  placeholder="Search city" value={searchCity} onChange={e=>setSearchCity(e.target.value)} 
  onKeyDown={handleEnter}/>
  <div className="search-icon">
    <img src={searchIcon} alt="Search" onClick={handleClick}/>
    </div>
  </div>
   
  { loading && <div className="loading-message">Loading...</div>}  
  { error && <div className="error-message">{error}</div>}
  { cityNotFound && <div className="city-not-found">City not found</div>} 
{!loading  && !cityNotFound && icon && <WeatherDetails city={city} loading={loading} cityNotFound={cityNotFound} 
icon={icon} temp={temp} lat={lat} long={long} country={country}
humidity={humidity} windSpeed={windSpeed} />} 
</div>    
</>
  )
}

export default App
