import { Link, useParams } from 'react-router-dom';
import { Fragment } from 'react';
import ProjectsBar from './ProjectsBar';

const Project = ({ projects }) => {
    let { id } = useParams()
    const project = projects.find(project => project.id === Number(id))
    
    return (
        <Fragment>
            <ProjectsBar title={project.title} />
            <Link to="/">Back</Link>
        </Fragment>
    )
}

export default Project
