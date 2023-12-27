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
import GroupIcon from '@mui/icons-material/Group';
import WarehouseIcon from '@mui/icons-material/Warehouse';
import OutletIcon from '@mui/icons-material/Outlet';
import PinDropIcon from '@mui/icons-material/PinDrop';
import ProductionQuantityLimitsIcon from '@mui/icons-material/ProductionQuantityLimits';
import AccountBalanceIcon from '@mui/icons-material/AccountBalance';
import ApartmentIcon from '@mui/icons-material/Apartment';
import AcUnitIcon from '@mui/icons-material/AcUnit';
import NavBar from './Navbar';
import Footer from '../Footer'
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
    const onClickLog = () => {
        navigate('/')
    }
    return (
        <ThemeProvider theme={defaultTheme}>
            <CssBaseline />
       
            <main>
                {/* Hero unit */}
                <Box
                    sx={{
                        bgcolor: 'background.paper',
                        pt: 5,
                        pb: 0,
                    }}
                >                  
                </Box>
                <Container sx={{ py: 8 }} maxWidth="lg">
                  
                    {/* End hero unit */}
                    <Grid container spacing={4}>
                        {/* {cards.map((card) => ( */}
                        <Grid item xs={12} sm={6} md={3}>
                            <Card
                                sx={{ height: '100%', display: 'flex', flexDirection: 'column', justifyContent: "center", border: '1px solid #e0e0e0', boxShadow: '0px 4px 8px rgba(0, 0, 0, 0.3)', }}
                            >
                                <GroupIcon sx={{
                                    width: '60%',
                                    height: '60%',
                                    marginLeft: '50px',
                                    // color:'white',
                                }}                                   
                                />
                                <Button sx={{ color: 'black' }}  >Customer</Button>
                               
                            </Card>
                        </Grid>
                        <Grid item xs={12} sm={6} md={3}>
                            <Card
                                sx={{ height: '100%', display: 'flex', flexDirection: 'column', justifyContent: "center", border: '1px solid #e0e0e0', boxShadow: '0px 4px 8px rgba(0, 0, 0, 0.3)', }}

                            >

                                < WarehouseIcon sx={{
                                    width: '60%',
                                    height: '60%',
                                    marginLeft: '20%',
                                }} />
                                <Button sx={{ color: 'black' }}>Warehouse</Button>


                            </Card>
                        </Grid>
                        <Grid item xs={12} sm={6} md={3}>
                            <Card
                                sx={{ height: '100%', display: 'flex', flexDirection: 'column', justifyContent: "center", border: '1px solid #e0e0e0', boxShadow: '0px 4px 8px rgba(0, 0, 0, 0.3)', }}
                            >
                                <OutletIcon sx={{
                                    width: '60%',
                                    height: '60%',
                                    marginLeft: '20%',
                                }} />
                                <Button sx={{ color: 'black' }}>Outlet</Button>


                            </Card>
                        </Grid>
                        <Grid item xs={12} sm={6} md={3}>
                            <Card
                                sx={{ height: '100%', display: 'flex', flexDirection: 'column', justifyContent: "center", border: '1px solid #e0e0e0', boxShadow: '0px 4px 8px rgba(0, 0, 0, 0.3)', }}
                            >
                                <PinDropIcon sx={{
                                    width: '60%',
                                    height: '60%',
                                    marginLeft: '20%',
                                }} />
                                <Button sx={{ color: 'black' }}>Location</Button>
                            </Card>
                        </Grid>
                        <Grid item xs={12} sm={6} md={3}>
                            <Card
                                sx={{ height: '100%', display: 'flex', flexDirection: 'column', justifyContent: "center", border: '1px solid #e0e0e0', boxShadow: '0px 4px 8px rgba(0, 0, 0, 0.3)', }}
                            >
                                <ProductionQuantityLimitsIcon sx={{
                                    width: '60%',
                                    height: '60%',
                                    marginLeft: '20%',
                                }} onClick={handleProductClick}n/>
                                <Button sx={{ color: 'black' }} onClick={handleProductClick}>Product</Button>
                            </Card>
                        </Grid>
                        <Grid item xs={12} sm={6} md={3}>
                            <Card
                                sx={{ height: '100%', display: 'flex', flexDirection: 'column', justifyContent: "center", border: '1px solid #e0e0e0', boxShadow: '0px 4px 8px rgba(0, 0, 0, 0.3)', }}
                            >
                                <AccountBalanceIcon sx={{
                                    width: '60%',
                                    height: '60%',
                                    marginLeft: '20%',
                                }} />
                                <Button sx={{ color: 'black' }}>Bank</Button>
                            </Card>
                        </Grid>
                        <Grid item xs={12} sm={6} md={3}>
                            <Card
                                sx={{ height: '100%', display: 'flex', flexDirection: 'column', justifyContent: "center", border: '1px solid #e0e0e0', boxShadow: '0px 4px 8px rgba(0, 0, 0, 0.3)', }}
                            >
                                <ApartmentIcon sx={{
                                    width: '60%',
                                    height: '60%',
                                    marginLeft: '20%',
                                }} />
                                <Button sx={{ color: 'black' }}>Company</Button>
                            </Card>
                        </Grid>
                        <Grid item xs={12} sm={6} md={3}>
                            <Card
                                sx={{ height: '100%', display: 'flex', flexDirection: 'column', justifyContent: "center", border: '1px solid #e0e0e0', boxShadow: '0px 4px 8px rgba(0, 0, 0, 0.3)', }}
                            >
                                <AcUnitIcon sx={{
                                    width: '60%',
                                    height: '60%',
                                    marginLeft: '20%',
                                }} />
                                <Button sx={{ color: 'black' }}>Unit</Button>
                            </Card>
                        </Grid>


                        {/* // ))} */}
                    </Grid>
                </Container>
            </main>
           
            <Footer/>
        </ThemeProvider>
    );
}