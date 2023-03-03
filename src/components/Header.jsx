import React from "react";
import { Link } from "react-router-dom";
import classes from './Header.module.css'

const Header = ( ) => {
    return (
        <div className={classes.headerWrapper}>
            <p className={classes.headerTitle}>
                Space
            </p>
            <nav className={classes.navContainer}>
                <ul className={classes.navList}>
                    <li className={classes.navItem}>
                        <a className={classes.textNavItem} href="/">Home</a>
                    </li>
                    <li className={classes.navItem}>
                        <a className={classes.textNavItem} href="/AboutUs">About us</a>
                    </li>
                    <li className={classes.navItem}>
                        <a className={classes.textNavItem} href="/Info">Info</a>
                    </li>
                    <li className={classes.navItem}>
                        <a className={classes.textNavItem} href="/Contacts">Contacts</a>
                    </li>
                </ul>
            </nav>
        </div>
    )
}
export default Header;