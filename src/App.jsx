import axios from 'axios'
import { useState, useEffect } from 'react'
import './App.css'
import CardWeather from './Components/CardWeather'

function App() {

  /*Inicial states for API info and getting location*/ 
  const [Info, setInfo] = useState()
  const [location, setLocation] = useState()

  


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
  if (location) {
    const myapikey = `7b698be720304d9cf7da0c7639e49b4b`;
    const URL = `https://api.openweathermap.org/data/2.5/weather?lat=${location.lat}&lon=${location.lon}&appid=${myapikey}`;
    axios.get(URL)
        .then (res => setInfo(res.data))
        .catch (err => console.log(err))

  }
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

/*Getting the weather image to show*/ 


const [iconImage, setIconImage] = useState("");
const [brokenclouds, setBrokenclouds] = useState("./images/broken-clouds.jpg");
const [overcastclouds, setOvercastclouds] = useState("./images/overcast-clouds.jpg")
const [fewclouds, setFewclouds] = useState("./images/few-clouds.jpg")
const [clearsky, setClearsky] = useState("./images/Clear-Sky.jpg")


useEffect(() => {
      if (Info?.weather[0].description === "broken clouds") {
        setIconImage(brokenclouds)
      } else if (Info?.weather[0].description === "overcast clouds") {
        setIconImage(overcastclouds)
      } else if (Info?.weather[0].description === "few clouds") {
        setIconImage(fewclouds)
      } else if (Info?.weather[0].description === "Clear Sky") {
        setIconImage(clearsky)
      }

},[Info])

/*Declaring for props*/ 
const humidity = Info?.main.humidity;
const typeofweather = Info?.weather[0].description;
const city = Info?.name;
const country = Info?.sys.country;

  
  console.log(iconImage); //This is to validate that the info is coming.

  return (
    <div className="App" style={{backgroundImage: `url(${iconImage})`}}>
      <CardWeather
        info = {Info}
        iconImage = {iconImage}
        temp = {temp}
        letter = {letter}
        changetemp = {changetemp}
        humidity = {humidity}
        typeofweather = {typeofweather}
        city = {city}
        country = {country}
      />
    </div>
  )
}

export default App