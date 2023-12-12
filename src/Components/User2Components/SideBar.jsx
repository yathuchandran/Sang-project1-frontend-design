

import * as React from 'react';
import { styled, useTheme } from '@mui/material/styles';
import Box from '@mui/material/Box';
import Drawer from '@mui/material/Drawer';
import CssBaseline from '@mui/material/CssBaseline';
import MuiAppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import List from '@mui/material/List';
import Typography from '@mui/material/Typography';
import Divider from '@mui/material/Divider';
import IconButton from '@mui/material/IconButton';
// import MenuOpenIcon from '@mui/icons-material/MenuOpen';
// import ChevronLeftIcon from '@mui/icons-material/ChevronLeft';
// import ChevronRightIcon from '@mui/icons-material/ChevronRight';
import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
// import InboxIcon from '@mui/icons-material/MoveToInbox';
// import MailIcon from '@mui/icons-material/Mail';
import Avatar from '@mui/material/Avatar';
import sang_logo from '../../assets/sang_logo.png';
import SettingsIcon from '@mui/icons-material/Settings';
import PowerSettingsNewIcon from '@mui/icons-material/PowerSettingsNew';
import Tooltip from '@mui/material/Tooltip';
import Menu from '@mui/material/Menu';
import MenuItem from '@mui/material/MenuItem';
import { useNavigate } from 'react-router-dom';
import MenuIcon from '@mui/icons-material/Menu';
import EnhancedTable from './Products';

const drawerWidth = 240;



const AppBar = styled(MuiAppBar, {
    shouldForwardProp: (prop) => prop !== 'open',
})(({ theme, open }) => ({
    transition: theme.transitions.create(['margin', 'width'], {
        easing: theme.transitions.easing.sharp,
        duration: theme.transitions.duration.leavingScreen,
    }),
    ...(open && {
        width: `calc(100% - ${drawerWidth}px)`,
        marginLeft: `${drawerWidth}px`,
        transition: theme.transitions.create(['margin', 'width'], {
            easing: theme.transitions.easing.easeOut,
            duration: theme.transitions.duration.enteringScreen,
        }),
    }),
}));

const DrawerHeader = styled('div')(({ theme }) => ({
    display: 'flex',
    alignItems: 'center',
    padding: theme.spacing(0, 1),
    // necessary for content to be below app bar
    ...theme.mixins.toolbar,
    justifyContent: 'flex-end',
}));

function PersistentDrawerLeft() {
    const theme = useTheme();
    const [open, setOpen] = React.useState(false);
    const [anchorEl, setAnchorEl] = React.useState(null);
    const navigate = useNavigate()

    const handleDrawerOpen = () => {
        localStorage.setItem("drawerWidth", "65%");

        setOpen(true);
    };

    const handleDrawerClose = () => {
        localStorage.setItem("drawerWidth", "100%");
        setOpen(false);
    };

    const handleClose = () => {
        setAnchorEl(null);
    };
    const handleClick = (event) => {
        setAnchorEl(event.currentTarget);
    };
    const handleProductClick = (e) => {
        e.preventDefault();
        handleClose()
        navigate('/user2/product')
        

    };
    return (
        <>
                      {/* <EnhancedTable drawerOpen={open} /> */}

        <Box sx={{ display: 'flex' }}>
            <CssBaseline />
            <AppBar position="fixed" open={open}>
                <Toolbar>
                    <IconButton
                        color="inherit"
                        aria-label="open drawer"
                        onClick={handleDrawerOpen}
                        edge="start"
                        sx={{ mr: 2, ...(open && { display: 'none' }) }}
                    >
                        <MenuIcon />
                        {/* <Typography variant="h6" noWrap component="div">
                            drawer
                        </Typography> */}
                    </IconButton>
                    {/* <Avatar alt="Logo" src={sang_logo} sx={{ mr: 2, width: 60, height: 60 }} /> */}

                    <Box sx={{ flexGrow: 1, }}>

                        {/* <Typography variant="h6" noWrap component="div">
                            Sang Solution
                        </Typography> */}
                    </Box>


                    <Box sx={{ flexGrow: 0, }}>
                        <SettingsIcon sx={{ marginRight: '20px' }} />
                        < PowerSettingsNewIcon sx={{ marginRight: '20px' }} />
                    </Box>

                    <Box sx={{ flexGrow: 0 }}>
                        <Tooltip title="Open settings">
                            <IconButton sx={{ p: 0 }}>
                                <Avatar alt="Remy Sharp" src="/static/images/avatar/2.jpg" />
                            </IconButton>
                        </Tooltip>
                        <Menu
                            sx={{ mt: '45px' }}
                            id="menu-appbar"
                            anchorOrigin={{
                                vertical: 'top',
                                horizontal: 'right',
                            }}
                            keepMounted
                            transformOrigin={{
                                vertical: 'top',
                                horizontal: 'right',
                            }}
                        >

                        </Menu>
                    </Box>
                </Toolbar>
            </AppBar>
            <Drawer
                sx={{
                    width: drawerWidth,
                    flexShrink: 0,
                    '& .MuiDrawer-paper': {
                        width: drawerWidth,
                        boxSizing: 'border-box',
                    },
                }}
                variant="persistent"
                anchor="left"
                open={open}
            >
                <DrawerHeader>
                    <IconButton onClick={handleDrawerClose}>
                        <Avatar alt="Logo" src={sang_logo} sx={{ mr: 2, width: 60, height: 60 }} />

                        <Box sx={{ flexGrow: 1, }}>

                            <Typography variant="h6" noWrap component="div">
                                Sang Solution
                            </Typography>
                        </Box>
                        {/* <MenuIcon /> */}

                        {/* {theme.direction === 'ltr' ? <ChevronLeftIcon /> : <ChevronRightIcon />} */}
                    </IconButton>
                </DrawerHeader>
                <Divider />
                <List>
                    {['MASTERS', 'FINANCIAL', 'REPORTS', 'SETTING'].map((text, index) => (
                        <ListItem key={text} disablePadding>
                            <ListItemButton onClick={text === 'MASTERS' ? handleClick : null}>
                                <ListItemIcon>
                                    {/* {index % 2 === 0 ? <InboxIcon /> : <MailIcon />} */}
                                </ListItemIcon>
                                <ListItemText primary={text} />
                            </ListItemButton>
                            {text === 'MASTERS' && (
                                <Menu
                                    id="master-menu"
                                    anchorEl={anchorEl}
                                    open={Boolean(anchorEl)}
                                    onClose={handleClose}
                                    anchorOrigin={{
                                        vertical: 'top',
                                        horizontal: 'right',
                                    }}
                                    transformOrigin={{
                                        vertical: 'top',
                                        horizontal: 'end',
                                    }}
                                >
                                    <MenuItem onClick={handleClose}>Customer</MenuItem>
                                    <MenuItem onClick={handleClose}>Warehouse</MenuItem>
                                    <MenuItem onClick={handleClose}>Outlet</MenuItem>
                                    <MenuItem onClick={handleClose}>Location</MenuItem>
                                    <MenuItem onClick={handleProductClick}>Product</MenuItem>
                                    <MenuItem onClick={handleClose}>Bank</MenuItem>
                                    <MenuItem onClick={handleClose}>Company</MenuItem>
                                    <MenuItem onClick={handleClose}>Unit</MenuItem>
                                </Menu>
                            )}
                        </ListItem>
                    ))}
                </List>
                <Divider />
                <List>
                    {['Profile', 'Logout',].map((text, index) => (
                        <ListItem key={text} disablePadding>
                            <ListItemButton>
                                <ListItemIcon>
                                    {/* {index % 2 === 0 ? <InboxIcon /> : <MailIcon />} */}
                                </ListItemIcon>
                                <ListItemText primary={text} />
                            </ListItemButton>
                        </ListItem>
                    ))}
                </List>
            </Drawer>
        </Box>
              </>

    );
}
export default PersistentDrawerLeft;
