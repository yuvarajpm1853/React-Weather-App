import { useState } from 'react'
import './App.css'

// https://github.com/Makin-Things/weather-icons?tab=readme-ov-file
import clearDayIcon from './assets/clear-day.svg'
import clearNightIcon from './assets/clear-night.svg'
import cloudyDayIcon from './assets/cloudy-3-day.svg'
import cloudyNightIcon from './assets/cloudy-3-night.svg'
import cloudyIcon from './assets/cloudy.svg'
import ShowerRainIcon from './assets/hail.svg'
import rainDayIcon from './assets/rainy-3-day.svg'
import rainNightIcon from './assets/rainy-3-night.svg'
import thunderstormIcon from './assets/scattered-thunderstorms.svg'
import snowIcon from './assets/snowy-3.svg'
import mistIcon from './assets/fog.svg'
import windIcon from './assets/wind.svg'
import humidityIcon from './assets/humidity.svg'
import searchIcon from './assets/search.png'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
<div className="container">
  <div className="input-container">  
  <input type="text" className="cityInput" 
  placeholder="Search city" />
  <div className="search-icon">
    {/* https://openweathermap.org/weather-conditions#Weather-Condition-Codes-2 */}
    <img src={searchIcon} alt="Search" />
    </div>
  </div>
  </div>
     </>
  )
}

export default App
