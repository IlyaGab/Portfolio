import React from 'react';
import classes from "./Skill.module.css";

const Skill = () => {
    return (
        <>
            <div className={classes.skillsMainBlock}>
                <div className={classes.skillsChildBlock}></div>
                <div>
                    <h3 className={classes.skillTitle}>React</h3>
                    <div className={classes.skillDescription}>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Reiciendis culpa facere nulla vitae soluta sint eveniet, iure perferendis est autem aspernatur quas dolor provident assumenda cumque iste. Necessitatibus, sed dolore?
                        Quibusdam excepturi, sunt dolores soluta vel tempore. </div>
                </div>
            </div>
        </>
    );
};

export default Skill;