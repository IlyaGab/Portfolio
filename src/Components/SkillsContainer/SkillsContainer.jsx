import Skill from "../SkillsContainer/Skill/Skill"
import classes from '../SkillsContainer/SkillsContainer.module.css'

const SkillsContainer = (props) => {
    return (
        <div className={classes.mainSkillsBlock}>
            <div className={classes.mainSkillsBlockChild}>
                <div className={classes.skillsDescription}>
                    <span>My Skills</span>
                </div>
                <div>
                    <div className={classes.mySkills}>
                        <Skill name={'CSS'} />
                        <Skill name={'JS'} />
                        <Skill name={'React'} />
                        <Skill name={'Redux'} />
                        <Skill name={'Material UI'} />
                    </div>
                </div>
            </div>
        </div>
    )
}

export default SkillsContainer