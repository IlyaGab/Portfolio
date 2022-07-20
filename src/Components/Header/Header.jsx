import React from 'react';
import { NavLink } from 'react-router-dom';
import classes from './Header.module.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faStickerMule } from '@fortawesome/free-brands-svg-icons';
import { faHospital } from '@fortawesome/free-regular-svg-icons';

// const style = {
//     borderRadius: '30px',
//     color: '#fff',
//     font: '500 normal 16px Open Sans, sans-serif',
//     width: '100%',
//     height: '50px',
//     linehHeight: '50px',
//     margin: '0',
//     opacity: '0',
//     padding: '0 25px 0 30px',
//     position: 'absolute',
//     right: '0',
//     textTransform: 'uppercase',
//     top:'20px',
//     transition: 'all .3s',
// }

// const styleHover = {
//     borderRadius: '30px 0 0 30px',
//     margin: '0',
//     opacity: '1',
//     right: '27px',
//     textAlign:' center',
//     backgroundColor: '#ffb400',
//     zIndex: '-1',
// }


const Header = () => {
    return (
        <div className={classes.headerWrapper}>

            <div className={classes.navItems}>
                <NavLink to={'/'} className={classes.listItem}>
                    <FontAwesomeIcon icon={faHospital} />
                    <h2 className={classes.navTitleOne} >Home</h2>
                </NavLink>
                <NavLink to={'/skills'} className={classes.listItem}>
                    <FontAwesomeIcon icon={faStickerMule} />
                    <h2 className={classes.navTitleTwo} >Skills</h2>
                </NavLink>
                <NavLink to={'/projects'} className={classes.listItem}>
                    <FontAwesomeIcon icon={faStickerMule} />
                    <h2 className={classes.navTitleThree} >Portfolio</h2>
                </NavLink>
                <NavLink to={'/Contacts'} className={classes.listItem}>
                    <FontAwesomeIcon icon={faStickerMule} />
                    <h2 className={classes.navTitleFour} >Contact</h2>

                </NavLink>
            </div>
        </div>
    );
};

export default Header;