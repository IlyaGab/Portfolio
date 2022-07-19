import React from 'react';
import { NavLink } from 'react-router-dom';
import classes from './Header.module.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCode } from '@fortawesome/free-solid-svg-icons';
import { faHouzz, faStickerMule } from '@fortawesome/free-brands-svg-icons';
import { faHospital } from '@fortawesome/free-regular-svg-icons';

const Header = () => {
    return (
        <div className={classes.headerWrapper}>
                <div className={classes.navItems}>
                    <NavLink to={'/'} className={classes.listItem}>
                        <FontAwesomeIcon icon={faHospital} />
                        <h2>Home</h2>
                    </NavLink>
                    <NavLink to={'/skills'} className={classes.listItem}>
                        <FontAwesomeIcon icon={faStickerMule}/>
                        <h3>Skills</h3>
                        </NavLink>
                    <NavLink to={'/projects'} className={classes.listItem}>My Portfolio</NavLink>
                    <NavLink to={'/Contacts'}className={classes.listItem}>Contact Me</NavLink>
                </div>
        </div>
    );
};

export default Header;