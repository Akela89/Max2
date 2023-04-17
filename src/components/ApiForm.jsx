import React, { useState } from "react";
import classes from './Forms.module.css';
import ApiModal from "./ApiModal";
import Spinner from "./Spinner";



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
            <ApiModal data={props.data} open={openModal} onClose={()=>setOpenModal(false)}/>
            <Spinner/>
        </form>
        
        </div>
    )
}

export default ApiForm;