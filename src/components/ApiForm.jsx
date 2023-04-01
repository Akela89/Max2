import React from "react";
import classes from './Forms.module.css';


const ApiForm = (props) => {
    return (
        <form onSubmit={props.weatherMethod}>
            <div className={classes.formsWrapper}>
                <h1 className={classes.formText}>Введите город на английском</h1>
                <input type="text" name="city" placeholder="Город"/>
                <button>Получить погоду</button>
            </div>
        </form>
    )
}

export default ApiForm;