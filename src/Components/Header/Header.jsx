import React from 'react';
import { NavLink } from 'react-router-dom';
import classes from './Header.module.css'

const Header = () => {
    return (
        <div className={classes.headerWrapper}>
                <div className={classes.navItems}>
                    <NavLink to={'/'} className={classes.listItem}>Main</NavLink>
                    <NavLink to={'/skills'} className={classes.listItem}>My Skills</NavLink>
                    <NavLink to={'/projects'} className={classes.listItem}>My Portfolio</NavLink>
                    <NavLink to={'/Contacts'}className={classes.listItem}>Contact Me</NavLink>
                </div>
        </div>
    );
};

export default Header;