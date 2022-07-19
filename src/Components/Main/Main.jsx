import React from 'react';
import classes from './Main.module.css'




const Main = () => {
    return (
        <>
            <div className={classes.mainWrapper}>
                    <div className={classes.mainBlock}>
                        <div className={classes.colorBlock}></div>
                        <div className={classes.avatarBlock}></div>
                    </div>
                
                    <div className={classes.introduceBlock}>
                        <div>
                        <h1 className={classes.introduceItemOne}>
                            I'm
                            Ilya
                            Gab.
                            <span className={classes.introduceItemTwo}>Front-end Developer</span>
                        </h1>
                        <p className={classes.introduceItemThree}>Lorem ipsum dolor sit amet consectetur adipisicing elit. Doloribus accusamus ullam minus fuga, nulla nesciunt modi consequuntur autem delectus atque similique ipsum corporis beatae quisquam dolorum dolorem nihil debitis minima.</p>
                    </div>
                    </div>
                </div>
            </>
            );
};

            export default Main;