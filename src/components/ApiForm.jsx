import React, { useState } from "react";
import classes from './Forms.module.css';
import ApiModal from "./ApiModal";



const ApiForm = (props) => {
const [openModal, setOpenModal] = useState(false)

    return (
        <div>
        <form onSubmit={props.weatherMethod}>
            <div className={classes.formsWrapper}>
                <h1 className={classes.formText}>Введите город на английском</h1>
                <input type="text" name="city" placeholder="Город"/>

                <button onClick={() => setOpenModal(true)}>Получить погоду</button>
                
            </div>
            <ApiModal open={openModal} onClose={()=>setOpenModal(false)}/>
        </form>
        
        </div>
    )
}

export default ApiForm;