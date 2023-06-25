import React, { useState } from 'react';
import { useReducer, createContext } from 'react';
import classes from '../modules/Forms.module.css';
import ApiWeatherInfo from './ApiWeatherInfo';
import ApiForm from './ApiForm';
import Loader from './Loader';

const apiKey = '986b337467ac73faba2c5e2464a7fa47';

export const WeatherContext = createContext();

const initialState = {
  temp: undefined,
  city: undefined,
  country: undefined,
  sunrise: undefined,
  sunset: undefined,
  error: undefined,
  sortOption: 'default',
  resultsPerPage: 10,
  currentPage: 1,
  totalPages: 1,
};

const reducer = (state, action) => {
  switch (action.type) {
    case 'SET_WEATHER':
      return {
        temp: action.payload.temp,
        city: action.payload.city,
        country: action.payload.country,
        sunrise: action.payload.sunrise,
        sunset: action.payload.sunset,
        error: undefined,
      };
    case 'SET_ERROR':
      return {
        temp: undefined,
        city: undefined,
        country: undefined,
        sunrise: undefined,
        sunset: undefined,
        error: <p className={classes.errorBlock}>Введите название города</p>,
      };
    case 'SET_SORT_OPTION':
      return {
        ...state,
        sortOption: action.payload,
      };
    case 'SET_RESULTS_PER_PAGE':
      return {
        ...state,
        resultsPerPage: action.payload,
      };
    case 'SET_CURRENT_PAGE':
      return {
        ...state,
        currentPage: action.payload,
      };
    case 'SET_TOTAL_PAGES':
      return {
        ...state,
        totalPages: action.payload,
      };
    default:
      return state;
  }
};

const ApiList = () => {
  const [state, dispatch] = useReducer(reducer, initialState);

  const [isFetching, setIsFetching] = useState(false);

  const handleSortOptionChange = (e) => {
    dispatch({ type: 'SET_SORT_OPTION', payload: e.target.value });
  };

  const handleResultsPerPageChange = (e) => {
    dispatch({ type: 'SET_RESULTS_PER_PAGE', payload: parseInt(e.target.value) });
  };

  const handleCurrentPageChange = (e) => {
    dispatch({ type: 'SET_CURRENT_PAGE', payload: parseInt(e.target.value) });
  };
  const gettingWeather = async (e) => {
    e.preventDefault();
    const city = e.target.elements.city.value;
    const sortOption = state.sortOption;
    const resultsPerPage = state.resultsPerPage;
    const currentPage = state.currentPage;

    if (city !== '') {
      setIsFetching(true);

      const startIndex = (currentPage - 1) * resultsPerPage;

      const apiUrl = await fetch(
        `https://api.openweathermap.org/data/2.5/weather?q=${city}&sort=${sortOption}&start=${startIndex}&cnt=${resultsPerPage}&appid=${apiKey}`,
      );
      const data = await apiUrl.json();

      let sunset = data.sys.sunset;
      let date = new Date(sunset * 1000);
      date.setTime(sunset);
      let sunset_date = date.getHours() + ':' + date.getMinutes() + ':' + date.getSeconds();

      let sunrise = data.sys.sunrise;
      let date_s = new Date(sunrise * 1000);
      date.setTime(sunrise);
      let sunrise_date = date_s.getHours() + ':' + date_s.getMinutes() + ':' + date_s.getSeconds();

      dispatch({
        type: 'SET_WEATHER',
        payload: {
          temp: data.main.temp,
          city: data.name,
          country: data.sys.country,
          sunrise: sunrise_date,
          sunset: sunset_date,
        },
      });
      setIsFetching(false);
    } else {
      dispatch({
        type: 'SET_ERROR',
      });
    }
  };
  return (
    <WeatherContext.Provider value={state}>
      <div className={classes.formsWrapper}>
        <ApiForm weatherMethod={gettingWeather} />
        <div className={classes.selectWrapper}>
          <select value={state.sortOption} onChange={handleSortOptionChange}>
            <option value="default">По умолчанию</option>
            <option value="temperature">По температуре</option>
            <option value="city">По городу</option>
          </select>

          <select value={state.resultsPerPage} onChange={handleResultsPerPageChange}>
            <option value={10}>10 результатов</option>
            <option value={20}>20 результатов</option>
            <option value={50}>50 результатов</option>
          </select>

          <input
            className={classes.inputWrapper}
            type="number"
            value={state.currentPage}
            onChange={handleCurrentPageChange}
          />
        </div>
        {isFetching && <Loader />}
        {!isFetching && state.city && (
          <ApiWeatherInfo
            type="small"
            temp={state.temp}
            city={state.city}
            country={state.country}
            sunrise={state.sunrise}
            sunset={state.sunset}
            error={state.error}
          />
        )}
      </div>
    </WeatherContext.Provider>
  );
};

export default ApiList;
