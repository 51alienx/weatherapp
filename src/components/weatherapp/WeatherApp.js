import React, { useState } from 'react'
import './WeatherApp.css'
import search_icon from '../assests.js/search.png'
import clear_icon from '../assests.js/clear.png'
import cloud_icon from '../assests.js/cloud.png'
import drizzle from '../assests.js/drizzle.png'
import humidit from '../assests.js/humidity.png'
import rain from '../assests.js/rain.png'
import snow from '../assests.js/snow.png'
import wind from '../assests.js/wind.png'


const WeatherApp = () => {
  var key='796add13c990d90f1f9bf528971ecf13'
  const [inpvalue,setinpvalue]=useState('')
  const [humidity,sethumidity]=useState('64')
  // const [humidity,sethumidity]=useState('64')
  // const [humidity,sethumidity]=useState('64')
  const[wicon,setWicon]=useState(cloud_icon)



  const search= async()=>{
    var API_URL=`https://api.openweathermap.org/data/2.5/weather?q=${inpvalue}&units=Metric&appid=${key}`
    if(inpvalue[0]===''){
      return 0
    }
    else{

      const res= await fetch(API_URL)
      const data=await res.json()

      // var humidity=document.getElementsByClassName("humidity-level")
      var windspeed=document.getElementsByClassName("wind-speed")
      var temp=document.getElementsByClassName("weather-temp")
      var location=document.getElementsByClassName("weather-loc")
      sethumidity(data.main.humidity)
      windspeed[0].innerHTML=data.wind.speed+' km/h'
      temp[0].innerHTML=data.main.temp+' °c'
      location[0].innerHTML=data.name
      console.log('completed')
      console.log(data.weather[0].icon)
      if(data.weather[0].icon==='01d'|| data.weather[0].icon=='01n'){
        setWicon(clear_icon)
       
      }
      else if(data.weather[0].icon==='02d'|| data.weather[0].icon=='02n'){
        setWicon(cloud_icon)
       
      }
      else if(data.weather[0].icon==='03d'|| data.weather[0].icon=='03n'){
        setWicon(drizzle)
       
      }
      else if(data.weather[0].icon==='04d'|| data.weather[0].icon=='04n'){
        setWicon(drizzle)
       
      }
      else if(data.weather[0].icon==='09d'|| data.weather[0].icon=='09n'){
        setWicon(rain)
       
      }
      else if(data.weather[0].icon==='10d'|| data.weather[0].icon=='10n'){
        setWicon(rain)
       
      }
      else if(data.weather[0].icon==='13d'|| data.weather[0].icon=='13n'){
        setWicon(snow)
       
      }
      else{
        setWicon(clear_icon)
       
      }

    }
   
  }

  return (
    <div className='container'>
        <div className="top-bar">
            <input type="text" className="cityInput"
             placeholder='search'
             value={inpvalue}
             onChange={(e) => {
              setinpvalue(e.target.value);
            }}
            
           />
            <div className="search-icon">
              <img src={search_icon} alt="" onClick={()=>search()}/>
            </div>
            
        </div>
        <div className='weather-img'>
               <img src={wicon} alt="" />
        </div> 
        <div className="weather-temp">24°c</div>
            <div className="weather-loc">london</div>
            <div className="data-container">
                <div className="elements">
                    <img src={humidit} className='icon' alt="" />
                    <div className='data'>
                       <div className="humidity-level">{`${humidity}`} %</div>
                       <div className="text">humidity</div>
                    </div>
                </div>

                <div className="elements">
                    <img src={wind} className='icon' alt="" />
                    <div className='data'>
                       <div className="wind-speed">64 k/h</div>
                       <div className="text">wind speed</div>
                    </div>
                </div>
            </div>
            
    </div>
  )
}

export default WeatherApp