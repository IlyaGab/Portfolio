import React from 'react';
import classes from './Project.module.css'

const Project = () => {
    return (
        <div className={classes.projectsMainBlock}>
            <div className={classes.projectsImageBlock}>
                <span className={classes.projectImage}>Картинка</span>
                <div className={classes.projectButtonBlock}>
                    <button>Смотреть</button>
                </div>
            </div>
            <div className={classes.projectsDescription}>
                <span className={classes.projectName}>Название проекта</span>
                <span className={classes.projectShortDescription}>Краткое описание</span>
            </div>
        </div>
    );
};

export default Project;