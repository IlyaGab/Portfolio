import React from 'react';
import classes from './Main.module.css'


const Main = () => {
    return (
        <>
            <div className={classes.mainWrapper}>
                <div className={classes.mainBlock}>
                    <div className={classes.introduceBlock}>
                        <span className={classes.introduceItemOne}>Hello!</span>
                        <span className={classes.introduceItemTwo}>I'm Ilya Gab</span>
                        <span className={classes.introduceItemThree}>Front-end Developer</span>
                    </div>

                    <div className={classes.avatarBlock}></div>
                </div>
            </div>
            <div className={classes.mainRemoteJobBlock}>
                <div className={classes.mainRemoteJobBlockChild}>
                    <span>Looking into remote work options</span>
                    <button>Hire me</button>
                </div>
            </div>
        </>
    );
};

export default Main;