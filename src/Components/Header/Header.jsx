import React from 'react';
import clases from './Header.module.css'

const Header = () => {
    return (
        <div className={clases.headerWrapper}>
                <div className={clases.navItems}>
                    <div className={clases.listItem}>Главная</div>
                    <div className={clases.listItem}>Скиллы</div>
                    <div className={clases.listItem}>Работы</div>
                    <div className={clases.listItem}>Контакты</div>
                </div>
        </div>
    );
};

export default Header;