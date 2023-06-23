import React, { useState, useContext } from 'react';
import classes from '../modules/Forms.module.css';
import ApiModal from './ApiModal';
import { WeatherContext } from './ApiList';

const ApiForm = (props) => {
  const [openModal, setOpenModal] = useState(false);
  const { dispatch } = useContext(WeatherContext);
  const { sort } = useContext(WeatherContext);

  const handleSortChange = (e) => {
    dispatch({
      type: 'SET_SORT',
      payload: e.target.value,
    });
  };
  return (
    <div>
      <form onSubmit={props.weatherMethod}>
        <div className={classes.formsWrapper}>
          <h1 className={classes.formText}>Введите город на английском</h1>
          <input type="text" name="city" placeholder="Город" />

          <button onClick={() => setOpenModal(true)}>Получить погоду</button>
          <div className={classes.formGroup}>
            <select name="sort" value={sort} onChange={handleSortChange}>
              <option value="default">По умолчанию</option>
              <option value="temp">По температуре</option>
              <option value="city">По городу</option>
            </select>
          </div>
        </div>
        <ApiModal data={props.data} open={openModal} onClose={() => setOpenModal(false)} />
      </form>
    </div>
  );
};

export default ApiForm;
