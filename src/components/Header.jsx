import React from "react";
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
                        <a className={classes.textNavItem} href="https://vk.com/i.solovyev89">Home</a>
                    </li>
                    <li className={classes.navItem}>
                        <a className={classes.textNavItem} href="https://vk.com/i.solovyev89">About us</a>
                    </li>
                    <li className={classes.navItem}>
                        <a className={classes.textNavItem} href="https://vk.com/i.solovyev89">Info</a>
                    </li>
                    <li className={classes.navItem}>
                        <a className={classes.textNavItem} href="https://vk.com/i.solovyev89">Contacts</a>
                    </li>
                </ul>
            </nav>
        </div>
    )
}
export default Header;