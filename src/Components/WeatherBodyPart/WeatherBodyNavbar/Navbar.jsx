import css from './Navbar.module.css'
import React from "react";

const Navbar = () => {
    const classes = css.NavItem + ' ' + css.Active
    const ButtonActive = css.NavbarButton + ' ' + css.ActiveBut
    return (
        <header>
            <ul className={css.Nav}>
                <li className={classes}>Today</li>
                <li className={css.NavItem}>Week</li>
                <li className={css.NavItemRight}><button className={ButtonActive}>&deg;C</button></li>
                <li className={css.NavItemRight}><button className={css.NavbarButton}>&deg;F</button></li>
            </ul>
        </header>
    );
};

export default Navbar;