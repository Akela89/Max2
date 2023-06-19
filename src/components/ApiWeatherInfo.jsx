import React from "react";
import classes from './Forms.module.css';
import { WeatherContext } from "./ApiList";
import { useContext } from "react";

const ApiWeatherInfo = () => {
  const { temp, city, country, sunrise, sunset, error } = useContext(WeatherContext);

  return (
    <div className={classes.formsWrapper}>
      {city && (
        <div>
          <p className={classes.formText}>Страна: {country}</p>
          <p className={classes.formText}>Местоположение: {city}</p>
          <p className={classes.formText}>Температура: {temp}</p>
          <p className={classes.formText}>Восход солнца: {sunrise}</p>
          <p className={classes.formText}>Заход солнца: {sunset}</p>
        </div>
      )}
      {error && <p>{error}</p>}
    </div>
  );
};

export default ApiWeatherInfo;