import axios from 'axios'
import  { useEffect, useState, React } from 'react'





const CardWeather = () => {

/*Inicial states for API info and getting location*/ 
  const [Info, setInfo] = useState()
  const [location, setLocation] = useState()

/*Getting the weather image to show*/ 

  const description = Info?.weather[0].description;
  const [iconImage, setIconImage] = useState("");

  useEffect(() => {
    const brokenclouds = "./images/broken-clouds.jpg";
    const overcastclouds= "./images/overcast-clouds.jpg";
    if (description === "broken clouds") {
      setIconImage(brokenclouds)
    } else if (description === "overcast clouds") {
      setIconImage(overcastclouds)
    }
  },[])

/*useEffect to get the location*/ 

useEffect (() => {
    const success = pos => {
    const obj = {
        lat : pos.coords.latitude,
        lon : pos.coords.longitude
    }
    setLocation (obj) 
    }
    navigator.geolocation.getCurrentPosition(success) 
}, [])


/*useEffect to get the info from the API*/ 

useEffect (() => {
    const myapikey = `7b698be720304d9cf7da0c7639e49b4b`;
    const URL = `https://api.openweathermap.org/data/2.5/weather?lat=${location?.lat}&lon=${location?.lon}&appid=${myapikey}`;
    axios.get(URL)
        .then (res => setInfo(res.data))
        .catch (err => console.log(err))
}, [location])

const tempC = Info?.main.temp - 273.15;
const tempF = (tempC * 9/5) + 32; 
const F = "°F";
const C = "°C";

/*Rendering the temp*/ 

const [istrue, setIstrue] = useState();
const [temp, setTemp] = useState("Click bellow to see the temperature");
const [letter, setLetter] = useState("");

const changetemp = () => {
    
  setIstrue(!istrue)

  if (istrue) {
    setTemp (tempC.toFixed(2))
    setLetter (C)
  } else {
    setTemp (tempF.toFixed(2))
    setLetter(F)
  }
}



console.log(description); //This is to validate that the info is coming.


  return (
    <article className='card'>
        <h1>Weather app</h1>
        <h4 className='city'>{`${Info?.name}, ${Info?.sys.country}`}</h4>
        <div className='iconandinfo'>
          <img className='icon' src={`${iconImage}`} alt="Loading..." /> 
          <ul className='info'>
            <li className='typeofweather'>{`${description}`}</li>
            <li className='humidity'><span>Humidity:</span> {`${Info?.main.humidity}%`}</li>
            <li className='temp'><span>Temperature:</span>{`${temp}${letter}`}</li>
          </ul>
        </div>
        <button className='button' onClick={changetemp}>Temperature in °F/°C</button>
      </article>
  )
}

export default CardWeather