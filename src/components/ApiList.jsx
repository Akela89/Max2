import React, { useState} from "react";
import classes from './Forms.module.css';
import ApiWeatherInfo from "./ApiWeatherInfo";
import ApiForm from "./ApiForm";
import Loader from './Loader';

const apiKey = '986b337467ac73faba2c5e2464a7fa47';

const ApiList = () => {
    
    const [state, setState] = useState({
        temp: undefined,
        city: undefined,
        country: undefined,
        sunrise: undefined,
        sunset: undefined,
        error: undefined,
    })

    const [isFetching, setIsFetching] = useState(false)

    let gettingWeather = async (e) =>{
        e.preventDefault();
        let city = e.target.elements.city.value;
        
        if(city !== ''){

            setIsFetching(true);
            
            const apiUrl = await fetch (`https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}`);
            const data = await apiUrl.json();

            let sunset = data.sys.sunset;
            let date = new Date(sunset * 1000);
            date.setTime(sunset);
            let sunset_date = date.getHours() + ":" + date.getMinutes() + ":" + date.getSeconds()

            let sunrise = data.sys.sunrise;
            let date_s = new Date(sunrise * 1000);
            date.setTime(sunrise);
            let sunrise_date = date_s.getHours() + ":" + date_s.getMinutes() + ":" + date_s.getSeconds()
            
            setState({
                temp: data.main.temp,
                city: data.name,
                country: data.sys.country,
                sunrise: sunrise_date,
                sunset: sunset_date,
                error: undefined,
            });
            setIsFetching(false);
        } else{
            setState({
                temp: undefined,
                city: undefined,
                country: undefined,
                sunrise: undefined,
                sunset: undefined,
                error: <p className={classes.errorBlock}>Введите название города</p>,
            })
        }
    }
    return ( 
        <div className={classes.formsWrapper}>        
          <ApiForm data={state} weatherMethod={gettingWeather}/> 
            {isFetching && <Loader />} 
                {!isFetching&& state.city &&
                    <ApiWeatherInfo 
                    type="small" 
                    temp={state.temp} 
                    city={state.city} 
                    country={state.country} 
                    sunrise={state.sunrise} 
                    sunset={state.sunset} 
                    error={state.error} 
                    />
                }
        </div> 
      )
}

export default ApiList;