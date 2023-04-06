import React, { useState } from "react";
import classes from './Forms.module.css';
import ApiModal from "./ApiModal";



const ApiForm = (props) => {
const [modalActive, setModalActive] = useState(true)

    return (
        <div>
        <form onSubmit={props.weatherMethod}>
            <div className={classes.formsWrapper}>
                <h1 className={classes.formText}>Введите город на английском</h1>
                <input type="text" name="city" placeholder="Город"/>
                
                <button onClick={()=>setModalActive(true)}>Получить погоду</button>
            </div>
        </form>
        <ApiModal active={modalActive} setActive={setModalActive} />
        </div>
    )
}

export default ApiForm;