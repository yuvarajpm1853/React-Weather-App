import { useState } from 'react'
import './App.css'
import searchIcon from './assets/search.png'
import WeatherDetails from './WeatherDetails';

function App() {
  const [city, setCity] = useState("Chennai");


  return (
    <>
<div className="container">
  <div className="input-container">  
  <input type="text" className="cityInput" 
  placeholder="Search city" value={city} onChange={e=>setCity(e.target.value)}/>
  <div className="search-icon">
    {/* https://openweathermap.org/weather-conditions#Weather-Condition-Codes-2 */}
    <img src={searchIcon} alt="Search" />
    </div>
  </div>
  <WeatherDetails city={city} />
  </div>
     </>
  )
}

export default App
