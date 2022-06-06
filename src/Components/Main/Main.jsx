import React from 'react';
import classes from './Main.module.css'
import Skill from "./Skill/Skill";
import Project from "./Projects/Project";

const Main = () => {
    return (
        <>
            <div className={classes.mainWrapper}>
                <div className={classes.mainBlock}>
                    <div className={classes.introduceBlock}>
                        <span className={classes.introduceItem}>Привет!</span>
                        <span className={classes.introduceItem}>Меня зовут Илья Габ.</span>
                        <span className={classes.introduceItem}>Я front-end разработчик</span>
                    </div>
                    <div className={classes.avatarBlock}></div>
                </div>
            </div>
            <div className={classes.mainSkillsBlock}>
                <div className={classes.mainSkillsBlockChild}>
                    <div className={classes.skillsDescription}>
                        <span>Мои Скиллы</span>
                    </div>
                    <div className={classes.mySkills}>
                        <Skill/>
                        <Skill/>
                        <Skill/>
                    </div>
                </div>
            </div>
            <div className={classes.mainProjectsBlock}>
                <div className={classes.mainProjectsBlockChild}>
                    <div className={classes.projectsDescription}>
                        <span>Мои работы</span>
                    </div>
                    <div className={classes.myProjects}>
                        <Project/>
                        <Project/>
                    </div>
                </div>
            </div>
            <div className={classes.mainRemoteJobBlock}>
                <div className={classes.mainRemoteJobBlockChild}>
                    <span>Рассматриваю варианты удаленной работы</span>
                    <button>Нанять меня</button>
                </div>
            </div>
            <div className={classes.mainContactsBlock}>
                <div className={classes.mainContactsBlockChild}>
                    <span>Контакты</span>
                    <form action="" className={classes.contactsFormBlock}>
                        <input type="text" name="" id=""/>
                        <input type="text" name="" id=""/>
                        <textarea name="" id=""></textarea>
                    </form>
                    <button>Отправить</button>
                </div>
            </div>
        </>
    );
};

export default Main;