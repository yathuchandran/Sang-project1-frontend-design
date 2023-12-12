import React, { useState } from 'react';
import AppBar from '@mui/material/AppBar';
import Button from '@mui/material/Button';
import CameraIcon from '@mui/icons-material/PhotoCamera';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import CssBaseline from '@mui/material/CssBaseline';
import Grid from '@mui/material/Grid';
import Stack from '@mui/material/Stack';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Container from '@mui/material/Container';
import Link from '@mui/material/Link';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import sang_logo from '../../assets/sang_logo.png';
import Avatar from '@mui/material/Avatar';
import ButtonGroup from '@mui/material/ButtonGroup';
import DomainIcon from '@mui/icons-material/Domain';
import MonetizationOnIcon from '@mui/icons-material/MonetizationOn';
import ReportGmailerrorredIcon from '@mui/icons-material/ReportGmailerrorred';
import SettingsIcon from '@mui/icons-material/Settings';
import PowerSettingsNewIcon from '@mui/icons-material/PowerSettingsNew';
import {  Menu, MenuItem } from '@mui/material';
import { useNavigate } from 'react-router-dom';

function Copyright() {
    return (
        <Typography variant="body2" color="text.secondary" align="center">
            {'Copyright © '}
            <Link color="inherit" href="https://mui.com/">
                Your Website
            </Link>{' '}
            {new Date().getFullYear()}
            {'.'}
        </Typography>
    );
}

const cards = [1, 2, 3, 4, 5, 6, 7, 8, 9];

// TODO remove, this demo shouldn't need to reset the theme.
const defaultTheme = createTheme();

export default function Album() {
    const [anchorEl, setAnchorEl] = useState(null);
    const [text, setText] = useState('');
    const navigate=useNavigate()
    const handleClick = (event) => {
        setAnchorEl(event.currentTarget);
        setText('MASTERS');
    };

    const handleClose = () => {
        setAnchorEl(null);
        setText('');
    };

    const handleProductClick = () => {
        handleClose();
        navigate('/user3/product')
        // Redirect to the product page here
        // history.push('/product'); // Replace '/product' with the actual URL of your product page
    };
    return (
        <ThemeProvider theme={defaultTheme}>
            <CssBaseline />
            {/* <AppBar position="relative"> */}
            <Toolbar>
                <Box sx={{ flexGrow: 1, display: 'flex', justifyContent: '' }}>
                    <Avatar alt="Logo" src={sang_logo} sx={{ mr: 2, width: 60, height: 60 }} />
                    <Typography variant="h6" color="inherit" noWrap sx={{ marginTop: '1%' }}>
                        Sang Solutions
                    </Typography>
                </Box>
                <Box sx={{ flexGrow: 0, }}>
                    <SettingsIcon sx={{ marginRight: '20px' }} />
                    < PowerSettingsNewIcon sx={{ marginRight: '20px' }} />
                </Box>
            </Toolbar>
            {/* </AppBar> */}
            <main>
                {/* Hero unit */}
                <Box
                    sx={{
                        bgcolor: 'background.paper',
                        pt: 5,
                        pb: 0,
                    }}
                >
                    <Container maxWidth="sm" >
                        <Grid sx={{ display: "flex", justifyContent: "center" }}>
                            <Avatar alt="Logo" src={sang_logo} sx={{ mr: 2, width: 60, height: 60 }} />

                            <Typography
                                component="h1"
                                variant="h4"
                                align="center"
                                color="text.primary"
                                gutterBottom
                                marginTop='10px'
                            >
                                Sang Solutions
                            </Typography>
                        </Grid>
                        <Typography variant="h6" align="center" color="text.secondary" paragraph>
                            Something short and leading about the collection below—its contents,
                        </Typography>
                    </Container>
                </Box>
                <Container sx={{ py: 8 }} maxWidth="lg">
                    {/* End hero unit */}
                    <Grid container spacing={4}>
                        {/* {cards.map((card) => ( */}
                        <Grid item xs={12} sm={6} md={3}>
                            <Card
                                sx={{ height: '100%', display: 'flex', flexDirection: 'column', justifyContent: "center", border: '1px solid #e0e0e0', boxShadow: '0px 4px 8px rgba(0, 0, 0, 0.3)', }}
                            >
                                <DomainIcon sx={{
                                    width: '60%',
                                    height: '60%',
                                    marginLeft: '50px',
                                    // color:'white',
                                }}                                    onClick={handleClick}
                                />
                                <Button sx={{ color: 'black' }}  onClick={handleClick}>MASTERS</Button>
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

                            </Card>
                        </Grid>
                        <Grid item xs={12} sm={6} md={3}>
                            <Card
                                sx={{ height: '100%', display: 'flex', flexDirection: 'column', justifyContent: "center", border: '1px solid #e0e0e0', boxShadow: '0px 4px 8px rgba(0, 0, 0, 0.3)', }}

                            >

                                <MonetizationOnIcon sx={{
                                    width: '60%',
                                    height: '60%',
                                    marginLeft: '20%',
                                }} />
                                <Button sx={{ color: 'black' }}>FINANCIAL</Button>


                            </Card>
                        </Grid>
                        <Grid item xs={12} sm={6} md={3}>
                            <Card
                                sx={{ height: '100%', display: 'flex', flexDirection: 'column', justifyContent: "center", border: '1px solid #e0e0e0', boxShadow: '0px 4px 8px rgba(0, 0, 0, 0.3)', }}
                            >
                                <ReportGmailerrorredIcon sx={{
                                    width: '60%',
                                    height: '60%',
                                    marginLeft: '20%',
                                }} />
                                <Button sx={{ color: 'black' }}>REPORTS</Button>


                            </Card>
                        </Grid>
                        <Grid item xs={12} sm={6} md={3}>
                            <Card
                                sx={{ height: '100%', display: 'flex', flexDirection: 'column', justifyContent: "center", border: '1px solid #e0e0e0', boxShadow: '0px 4px 8px rgba(0, 0, 0, 0.3)', }}
                            >
                                <SettingsIcon sx={{
                                    width: '60%',
                                    height: '60%',
                                    marginLeft: '20%',
                                }} />
                                <Button sx={{ color: 'black' }}>SETTING</Button>
                            </Card>
                        </Grid>


                        {/* // ))} */}
                    </Grid>
                </Container>
            </main>
            {/* Footer */}
            {/* <Box sx={{ bgcolor: 'background.paper', p: 6 }} component="footer">
        <Typography variant="h6" align="center" gutterBottom>
          Footer
        </Typography>
        <Typography
          variant="subtitle1"
          align="center"
          color="text.secondary"
          component="p"
        >
          Something here to give the footer a purpose!
        </Typography>
        <Copyright />
      </Box> */}
            {/* End footer */}
        </ThemeProvider>
    );
}