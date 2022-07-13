import Project from "../ProjectsContainer/Projects/Project";
import classes from "../../Components/ProjectsContainer/ProjectsContainer.module.css"


const ProjectsContainer = (props) => {
    return (
        <div className={classes.mainProjectsBlock}>
            <div className={classes.mainProjectsBlockChild}>
                <div className={classes.projectsDescription}>
                    <span>My Portfolio</span>
                </div>
                <div className={classes.myProjects}>
                    <Project name={'Portfolio'} />
                    <Project name={'TodoList'} />
                    <Project name={'SocialNetwork'} />
                    <Project name={'Counter'} />
                </div>
            </div>
        </div>
    )
}

export default ProjectsContainer