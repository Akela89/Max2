import React from "react";
import classes from './modalWindow.module.css'
import ApiWeatherInfo from "./ApiWeatherInfo";
import nft from '../assets/nft.jpg'

const ApiModal = ({open, onClose, data}) => {
    if (!open) return null
    return (
        <div onClick={onClose} className={classes.overlay}>
            <div onClick={(e) =>{
                e.stopPropagation()
            }} className={classes.modalContainer}>
                <img src={nft} alt="weatherPic" />
                <div className={classes.modalRight}>
                    <p onClick={onClose} className={classes.closeBtn}>X</p>
                    <div className={classes.content}>
                        <ApiWeatherInfo type="full" {...data}/>
                    </div>
                </div>
            </div>
            
        </div>
    )
}

export default ApiModal;