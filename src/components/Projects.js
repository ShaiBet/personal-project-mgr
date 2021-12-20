import BottomProjectsBar from './BottomProjectsBar';
import ProjectsBar from './ProjectsBar';


import ImageList from '@mui/material/ImageList';
import ImageListItem from '@mui/material/ImageListItem';
import ImageListItemBar from '@mui/material/ImageListItemBar';
import DonutLargeIcon from '@mui/icons-material/DonutLarge';
import IconButton from '@mui/material/IconButton';
import { Link } from 'react-router-dom';
import { Fragment } from 'react';

const Projects = ({ projects }) => {
    return (
        <Fragment>
            <ProjectsBar title="Dana's Projects"  />      
            { projects.length > 0 ? (
                <ImageList>
                    {projects.map( (project) => (
                        <Link to={'/project/' + project.id}  key={project.id} >
                            <ImageListItem>
                                <IconButton size="large">
                                    <DonutLargeIcon />
                                </IconButton>                    
                                <ImageListItemBar 
                                    title={project.title}
                                    position="below"
                                />
                            </ImageListItem>                
                        </Link>
                    ))}
                </ImageList>
            ) : (
                'No Projects Available'
            )}
            <BottomProjectsBar />
        </Fragment>

    )
}

export default Projects
