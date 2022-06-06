import React from 'react';
import classes from './Footer.module.css'

const Footer = () => {
    return (
        <div className={classes.mainFooterBlock}>
            <div className={classes.footerBlockChild}>
                <span>Илья Габ</span>
                <div className={classes.footerSocialNetworksBlock}>
                    <span></span>
                    <span></span>
                    <span></span>
                    <span></span>
                </div>
                <span>2022 Все права защищены</span>
            </div>
        </div>
    );
};

export default Footer;