import React from "react";
import classes from './Contacts.module.css'


const Contacts = ( ) => {
    return (
        <div className={classes.ContactsWrapper}>
            <h1 className={classes.ContactsTitle}>Contacts</h1>
            <p className={classes.ContactsText}>
            +375 44 750 71 51
            </p>
            
        </div>
    )
}
export default Contacts;