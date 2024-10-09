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

const WeatherDetails = ({ city, loading, cityNotFound, icon, 
    temp, lat, long, country, humidity, windSpeed }) => {
        // https://openweathermap.org/weather-conditions
    const weatherIconData= {
        "01d":clearDayIcon,
        "01n":clearNightIcon,
        "02d":cloudyDayIcon,
        "02n":cloudyNightIcon,
        "03d":cloudyIcon,
        "03n":cloudyIcon,
        "04d":cloudyIcon,
        "04n":cloudyIcon,
        "09d":ShowerRainIcon,
        "09n":ShowerRainIcon,
        "10d":rainDayIcon,
        "10n":rainNightIcon,
        "11d":thunderstormIcon,
        "11n":thunderstormIcon,
        "13d":snowIcon,
        "13n":snowIcon,
        "50d":mistIcon,
        "50n":mistIcon
    }
    let weatherIcon = weatherIconData[icon] || clearDayIcon;
    return ( 
        <>
        <div className="image">
            <img src={weatherIcon} alt="Weather Image" />
        </div>
        {/* pressed Alt hold and numbers 0176 */}
        <div className="temp">{temp}°C</div>
        <div className="city">{city}</div>
        <div className="country">{country}</div>
        <div className="cord">
            <div>
                <span className="lat">Latitude</span>
                <span>{lat}</span>
            </div>
            <div>
                <span className="long">Longitude</span>
                <span>{long}</span>
            </div>
        </div>
        <div className="data-container">
            <div className="element">
                <img src={humidityIcon} alt="Humidity Icon" className='icon'/>
                <div className="data">
                    <div className="humidity-percent">{humidity}%</div>
                    <div className="text">Humidity</div>
                </div>
            </div>
            <div className="element">
                <img src={windIcon} alt="Wind Icon" className='icon'/>
                <div className="data">
                    <div className="wind-percent">{windSpeed} km/hr</div>
                    <div className="text">Wind Speed</div>
                </div>
            </div>
        </div>

        </>
     );
}
 
export default WeatherDetails;