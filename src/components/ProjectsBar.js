import Box from '@mui/material/Box';
import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import SearchIcon from '@mui/icons-material/Search';
import MoreIcon from '@mui/icons-material/MoreVert';
import DonutLargeIcon from '@mui/icons-material/DonutLarge';



const ProjectsBar = ({ title }) => {
    return (
        <Box sx={{flexGrow: 1}}>
            <AppBar position="static">
                <Toolbar>
                    <DonutLargeIcon 
                        color="inherit"
                        sx={{ flexGrow: 1 }}/>
                    <Typography 
                        variant="h6"
                        component="div"
                        sx={{ flexGrow: 5 }}>     
                            {title}
                    </Typography>
                    <IconButton
                        size="large"
                        aria-label="search"
                        color="inherit">
                        <SearchIcon />
                    </IconButton>
                    <IconButton
                        size="large"
                        aria-label="display more actions"
                        edge="end"
                        color="inherit">
                        <MoreIcon />
                    </IconButton>
                </Toolbar>
            </AppBar>            
        </Box>
    )
}

export default ProjectsBar
