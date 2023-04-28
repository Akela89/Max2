import React from "react";
import classes from './Forms.module.css';

const ApiWeatherInfo = ({type = 'small', ...props}) => {
    return (
        <div className={classes.formsWrapper}>
            {props.city &&
                <div>
                    <p className={classes.formText}>Страна: {props.country}</p>
                    <p className={classes.formText}>Местоположение:{props.city}</p>
                    {type === 'full' &&
                        <>
                            <p className={classes.formText}>Температура:{props.temp}</p>
                            <p className={classes.formText}>Восход солнца:{props.sunrise}</p>
                            <p className={classes.formText}>Заход солнца:{props.sunset}</p> 
                        </>                  
                    }
                   
                </div>
            }
            <p>{props.error}</p>
        </div>
    )
}

export default ApiWeatherInfo;