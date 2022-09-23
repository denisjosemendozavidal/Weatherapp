import axios from 'axios'
import  { useEffect, useState, React } from 'react'





const CardWeather = ({Info, iconImage, temp, letter, changetemp, humidity, typeofweather, city, country, iconLogo}) => {




  return (
    <article className='card'>
        <h1>Weather app</h1>
        <h4 className='city'>{`${city}, ${country}`}</h4>
        <div className='iconandinfo'>
          <img className='icon' src={`https://openweathermap.org/img/wn/${iconLogo}@2x.png`} alt="Loading..." /> 
          <ul className='info'>
            <li className='typeofweather'>{`${typeofweather}`}</li>
            <li className='humidity'><span>Humidity:</span> {`${humidity}%`}</li>
            <li className='temp'><span>Temperature:</span>{`${temp}${letter}`}</li>
          </ul>
        </div>
        <button className='button' onClick={changetemp}>Temperature in °F/°C</button>
      </article>
  )
}

export default CardWeather