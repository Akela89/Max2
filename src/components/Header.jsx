import React from "react";
import { Link } from "react-router-dom";
import classes from './Header.module.css';

const Header = ( ) => {
    return (
        <div className={classes.headerWrapper}>
            <p className={classes.headerTitle}>
                Space
            </p>
            <nav className={classes.navContainer}>
                <ul className={classes.navList}>
                    <li className={classes.navItem}>
                        <Link className={classes.textNavItem} to="/">Home</Link>
                    </li>
                    <li className={classes.navItem}>
                        <Link className={classes.textNavItem} to="/AboutUs">About us</Link>
                    </li>
                    <li className={classes.navItem}>
                        <Link className={classes.textNavItem} to="/Info">Info</Link>
                    </li>
                    <li className={classes.navItem}>
                        <Link className={classes.textNavItem} to="/Contacts">Contacts</Link>
                    </li>
                    <li className={classes.navItem}>
                        <Link className={classes.textNavItem} to="/Forms">Forms</Link>
                    </li>
                </ul>
            </nav>
        </div>
    )
}
export default Header;