import React from "react";
import classes from './Forms.module.css';

const ApiWeatherInfo = (props) => {
    return (
        <div className={classes.formsWrapper}>
            {props.city &&
                <div>
                    <p>Страна: {props.country}</p>
                    <p>Местоположение:{props.city}</p>
                    <p>Температура:{props.temp}</p>
                    <p>Восход солнца:{props.sunrise}</p>
                    <p>Заход солнца:{props.sunset}</p>
                    
                </div>
            }
            <p>{props.error}</p>
        </div>
    )
}

export default ApiWeatherInfo;