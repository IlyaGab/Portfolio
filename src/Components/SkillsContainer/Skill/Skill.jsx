import React from 'react';
import classes from "./Skill.module.css";

const Skill = (props) => {
    return (
        <>
            <div className={classes.skillsMainBlock}>
                <div className={classes.skillsChildBlock}></div>
                <div>
                    <h3 className={classes.skillTitle}>{props.name}</h3>
                    <div className={classes.skillDescription}>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Lorem ipsum dolor sit amet consectetur adipisicing elit. Minima quisquam necessitatibus, rerum amet doloremque perferendis at numquam veritatis aperiam animi. Tempore quae repellat a ab quisquam numquam iure corporis sapiente. </div>
                </div>
            </div>
        </>
    );
};

export default Skill;