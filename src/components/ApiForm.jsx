import React, { useState, useContext, useEffect } from 'react';
import classes from '../modules/Forms.module.css';
import ApiModal from './ApiModal';
import { WeatherContext } from './ApiList';

const ApiForm = (props) => {
  const [openModal, setOpenModal] = useState(false);
  const { dispatch } = useContext(WeatherContext);
  const state = useContext(WeatherContext);

  const [selectedSort, setSelectedSort] = useState('default');
  const handleSortChange = (e) => {
    setSelectedSort(e.target.value);
    dispatch({
      type: 'SET_SORT',
      payload: e.target.value,
    });
  };

  useEffect(() => {
    setSelectedSort(state.sort);
  }, [state.sort]);

  return (
    <div>
      <form onSubmit={props.weatherMethod}>
        <div className={classes.formsWrapper}>
          <h1 className={classes.formText}>Введите город на английском</h1>
          <input type="text" name="city" placeholder="Город" />

          <button onClick={() => setOpenModal(true)}>Получить погоду</button>

          <div className={classes.formGroup}>
            <select name="sort" value={selectedSort} onChange={handleSortChange}>
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
