import React from "react";
import classes from './Forms.module.css';
import ApiWeatherInfo from "./ApiWeatherInfo";
import ApiForm from "./ApiForm";

const apiKey = '986b337467ac73faba2c5e2464a7fa47';

class ApiList extends React.Component {

state = {
    temp: undefined,
    city: undefined,
    country: undefined,
    sunrise: undefined,
    sunset: undefined,
    error: undefined,
}

    gettingWeather = async (e) =>{
        e.preventDefault();
        let city = e.target.elements.city.value;
        
        if(city === true){
            const apiUrl = await fetch(`https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}`);
            const data = await apiUrl.json();
            
            this.setState({
                temp: data.main.temp,
                city: data.name,
                country: data.sys.country,
                sunrise: data.sys.sunrise,
                sunset: data.sys.sunset,
                error: undefined,
            });
        } else{
            this.setState({
                temp: undefined,
                city: undefined,
                country: undefined,
                sunrise: undefined,
                sunset: undefined,
                error: 'Введите название города',
            })
        }
    }
    render(){
    return (
        <div className={classes.formsWrapper}>
            <ApiForm weatherMethod={this.gettingWeather}/>
            <ApiWeatherInfo
                temp={this.state.temp}
                city={this.state.city}
                country={this.state.country}
                sunrise={this.state.sunrise}
                sunset={this.state.sunset}
                error={this.state.error}
            />
        </div>
    )}
}

export default ApiList;