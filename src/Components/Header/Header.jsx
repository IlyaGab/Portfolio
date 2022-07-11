import React from 'react';
import { NavLink } from 'react-router-dom';
import clases from './Header.module.css'

const Header = () => {
    return (
        <div className={clases.headerWrapper}>
                <div className={clases.navItems}>
                    <NavLink to={'/'} className={clases.listItem}>Main</NavLink>
                    <NavLink to={'/'} className={clases.listItem}>My Skills</NavLink>
                    <NavLink to={'/'} className={clases.listItem}>My Portfolio</NavLink>
                    <NavLink to={'/'}className={clases.listItem}>Contact Me</NavLink>
                </div>
        </div>
    );
};

export default Header;