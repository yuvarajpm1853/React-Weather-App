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
import { useState } from 'react'

const WeatherDetails = ({city}) => {

    const [icon, setIcon] = useState(thunderstormIcon)
    const [temp, setTemp] = useState(0);
    const [lat, setLat] = useState(0);
    const [long, setLong] = useState(0);
    const [country, setCountry] = useState("IN");
    const [humidity, setHumidity] = useState();
    const [windSpeed, setWindSpeed] = useState();

    return ( 
        <>
        <div className="image">
            <img src={icon} alt="Weather Image" />
        </div>
        {/* pressed Alt hold and numbers 0176 */}
        <div className="temp">{temp}°C</div>
        <div className="city">{city}</div>
        <div className="country">{country}</div>
        <div className="cord">
            <div>
                <span className="lat">latitude</span>
                <span>{lat}</span>
            </div>
            <div>
                <span className="long">longitude</span>
                <span>{long}</span>
            </div>
        </div>

        </>
     );
}
 
export default WeatherDetails;