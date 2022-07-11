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
                        <span className={classes.introduceItemOne}>Hello!</span>
                        <span className={classes.introduceItemTwo}>I'm Ilya Gab</span>
                        <span className={classes.introduceItemThree}>Front-end Developer</span>
                    </div>
                    <div className={classes.avatarBlock}></div>
                </div>
            </div>
            <div className={classes.mainSkillsBlock}>
                <div className={classes.mainSkillsBlockChild}>
                    <div className={classes.skillsDescription}>
                        <span>My Skills</span>
                    </div>
                    <div className={classes.mySkills}>
                        <Skill name={'HTML'}/>
                        <Skill name={'CSS'}/>
                        <Skill name={'JS'}/>
                        <Skill name={'React'}/>
                        <Skill name={'Redux'}/>
                        <Skill name={'Material UI'}/>
                    </div>
                </div>
            </div>
            <div className={classes.mainProjectsBlock}>
                <div className={classes.mainProjectsBlockChild}>
                    <div className={classes.projectsDescription}>
                        <span>My Portfolio</span>
                    </div>
                    <div className={classes.myProjects}>
                        <Project name={'Portfolio'}/>
                        <Project name={'TodoList'}/>
                        <Project name={'SocialNetwork'}/>
                        <Project name={'Counter'}/>
                    </div>
                </div>
            </div>
            <div className={classes.mainRemoteJobBlock}>
                <div className={classes.mainRemoteJobBlockChild}>
                    <span>Looking into remote work options</span>
                    <button>Hire me</button>
                </div>
            </div>
            <div className={classes.mainContactsBlock}>
                <div className={classes.mainContactsBlockChild}>
                    <span>My Contacts</span>
                    <form action="" className={classes.contactsFormBlock}>
                        <input type="text" name="" id=""/>
                        <input type="text" name="" id=""/>
                        <textarea name="" id=""></textarea>
                    </form>
                    <button>Send</button>
                </div>
            </div>
        </>
    );
};

export default Main;