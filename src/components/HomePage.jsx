import React from "react";
import classes from './Contacts.module.css'

const HomePage = ( ) => {
    return (
        <div className={classes.ContactsWrapper}>
            <h1 className={classes.ContactsTitle}>Home sweet home!</h1>
            <p className={classes.ContactsText}>
            +375 44 750 71 51 
            </p>
        </div>
    )
}
export default HomePage;