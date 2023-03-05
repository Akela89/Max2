import React from "react";
import classes from './Contacts.module.css'


const Contacts = ( ) => {
    return (
        <div className={classes.ContactsWrapper}>
            <h1 className={classes.ContactsTitle}>Contacts</h1>
            <p className={classes.ContactsText}>
            Please fill out the form.
            </p>
            
        </div>
    )
}
export default Contacts;