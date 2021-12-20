import { styled } from '@mui/material/styles';
import Box from '@mui/material/Box';
import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import IconButon from '@mui/material/IconButton';
import ListAltIcon from '@mui/icons-material/ListAlt';
import Fab from '@mui/material/Fab';
import AddIcon from '@mui/icons-material/Add';
import SettingsIcon from '@mui/icons-material/Settings';

const BottomProjectsBar = () => {
    const StyledFab = styled(Fab)({
        position: 'absolute',
        zIndex: 1,
        top: -30,
        left: 0,
        right: 0,
        margin: '0 auto',
    });

    return (
        <Box sx={{flexGrow: 1}}>
            <AppBar 
                position="fixed"
                color="primary"
                sx={{ top: 'auto', bottom: 0 }}>
                <Toolbar>
                    <IconButon sx={{ flexGrow: 1 }}>
                        <ListAltIcon />
                    </IconButon>
                    <StyledFab>
                        <AddIcon />
                    </StyledFab>
                    <Box sx={{ flexGrow: 1 }} />
                    <IconButon sx={{ flexGrow: 1 }}>
                        <SettingsIcon />
                    </IconButon>

                </Toolbar>
            </AppBar>
        </Box>
    )
}

export default BottomProjectsBar
