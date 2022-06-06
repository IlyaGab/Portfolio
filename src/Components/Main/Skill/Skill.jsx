import React from 'react';
import classes from "./Skill.module.css";

const Skill = () => {
    return (
        <div className={classes.skillsMainBlock}>
            <div className={classes.skillsChildBlock}></div>
            <span>React</span>
            <div className={classes.skillDescription}>Подробное описание навыка</div>
        </div>
    );
};

export default Skill;