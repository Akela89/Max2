import React from "react";
import classes from './modalWindow.module.css'


const ApiModal = (active, setActive) => {
    return (
        <div 
        className={active ? 'modalWindowActive' : 'modalWindow'} 
        onclick={() => setActive(false)}
        >
            <div 
            className={classes.modalContent} 
            onclick ={e=>e.stopPropagation()}  >
            </div>

        </div>
    )
}

export default ApiModal;