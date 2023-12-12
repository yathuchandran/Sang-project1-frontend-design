import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import Menu from '@mui/material/Menu';
import Container from '@mui/material/Container';
import Avatar from '@mui/material/Avatar';
import Tooltip from '@mui/material/Tooltip';
import MenuItem from '@mui/material/MenuItem';
import sang_logo from '../../assets/sang_logo.png';
import { useNavigate } from 'react-router-dom';
import TextField from '@mui/material/TextField';
import SearchIcon from '@mui/icons-material/Search';



const settings = ['Profile', 'Account', 'Dashboard', 'Logout'];

function NavBar() {
    const [anchorElUser, setAnchorElUser] = React.useState(null);
    const handleOpenUserMenu = (event) => {
        setAnchorElUser(event.currentTarget);
    };

    const handleCloseUserMenu = () => {
        setAnchorElUser(null);
    };
    return (
        <>
            <AppBar position="static" sx={{ bgcolor: '#0583D2', boxShadow: "5px 5px 15px rgba(0, 0, 0, 0.4)", }}>
                <Container maxWidth="xl">
                    <Toolbar disableGutters>

                        <Avatar alt="Logo" src={sang_logo} sx={{ mr: 2, width: 60, height: 60 }} />
                        <Box sx={{ flexGrow: 1, }}>

                            <Typography variant="h6" noWrap component="div">
                                Sang Solution
                            </Typography>
                        </Box>

                        <Box sx={{
                            flexGrow: 1, display: { xs: 'none', md: 'flex' }, alignItems: 'center',
                            justifyContent: 'start',
                        }}>
                            <TextField
                                label="Search"
                                variant="outlined"
                                // size="small"
                                sx={{
                                    width: '400px',
                                    color: 'white',
                                    '& .MuiInputLabel-root': {
                                        color: 'white',
                                    },

                                    '& input': {
                                        py: '8px',
                                        height: '20px',
                                        color: 'white',
                                    },
                                    '& .MuiOutlinedInput-root': {
                                        '& fieldset': {
                                            borderColor: 'white', // Change the outline color to white
                                        },
                                    },
                                }}
                                InputProps={{
                                    startAdornment: (
                                        <SearchIcon sx={{ marginRight: '8px', color: 'grey' }} />
                                    ),
                                }}
                            />


                        </Box>


                        {/* <Box sx={{ flexGrow: 0, }}>
                            <SettingsIcon sx={{ marginRight: '20px' }} />
                            < PowerSettingsNewIcon sx={{ marginRight: '20px' }} />
                        </Box> */}

                        <Box sx={{ flexGrow: 0 }}>
                            <Tooltip title="Open settings">
                                <IconButton onClick={handleOpenUserMenu} sx={{ p: 0 }}>
                                    <Avatar alt="Remy Sharp" src="/static/images/avatar/2.jpg" />
                                </IconButton>
                            </Tooltip>
                            <Menu
                                sx={{ mt: '45px' }}
                                id="menu-appbar"
                                anchorEl={anchorElUser}
                                anchorOrigin={{
                                    vertical: 'top',
                                    horizontal: 'right',
                                }}
                                keepMounted
                                transformOrigin={{
                                    vertical: 'top',
                                    horizontal: 'right',
                                }}
                                open={Boolean(anchorElUser)}
                                onClose={handleCloseUserMenu}
                            >
                                {settings.map((setting) => (
                                    <MenuItem key={setting} onClick={handleCloseUserMenu}>
                                        <Typography textAlign="center">{setting}</Typography>
                                    </MenuItem>
                                ))}
                            </Menu>
                        </Box>
                    </Toolbar>
                </Container>
            </AppBar>

        </>

    )
}
export default NavBar


