import React from 'react';
import clases from './Portfolio.module.css'
import Header from "./Header/Header";
import Main from "./Main/Main";
import Footer from "./Footer/Footer";

const Portfolio = () => {
    return (
        <div className={clases.portfolioWrapper}>
            <div className={clases.headerWrapper}>
                <Header/>
            </div>
            <div className={clases.mainWrapper}>
                <Main/>
            </div>
            <div className={clases.footerWrapper}>
                <Footer/>
            </div>
        </div>
    );
};

export default Portfolio;