import React from 'react';
import classes from './Project.module.css'

const Project = (props) => {
    return (
        <div className={classes.projectsMainBlock}>
            <div>
                <button className={classes.projectsButton}>Смотреть</button> 
            </div>
            <div className={classes.projectsDescription}>
                    <h3 className={classes.projectName}>{props.name}</h3>
                    <span className={classes.projectShortDescription}>Lorem ipsum dolor sit amet consectetur adipisicing elit. Unde reiciendis debitis qui inventore delectus eligendi adipisci a, animi repellat nemo, reprehenderit corporis illo fugit dolore vel maiores eveniet velit deleniti!</span>
                </div>
        </div>
    );
};

export default Project;