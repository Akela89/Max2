import React, { useState } from "react";
import classes from "./loader.module.css"

const Spinner = () =>{
const [isLoading,setIsLoading] = useState(true)
if (Spinner) {
    setTimeout(()=>{
        Spinner.style.display = 'none';
        setIsLoading(false);
    }, 3000);
}

    return(!isLoading && (
        <div className={classes.loader}></div>)
)} 

export default Spinner;

