import React from "react";
import classes from './Info.module.css'

const Info = ( ) => {
    return (
        <div className={classes.InfoWrapper}>
            <h1 className={classes.InfoTitle}>Info</h1>
            <p className={classes.InfoText}>
            Since 1961, humanity has touched its greatness and was able to take the first step into the unknown...
            </p>
        </div>
    )
}
export default Info;

