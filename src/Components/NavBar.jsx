import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import Menu from '@mui/material/Menu';
import MenuIcon from '@mui/icons-material/Menu';
import Container from '@mui/material/Container';
import Avatar from '@mui/material/Avatar';
import Button from '@mui/material/Button';
import Tooltip from '@mui/material/Tooltip';
import MenuItem from '@mui/material/MenuItem';
import SettingsIcon from '@mui/icons-material/Settings';
import PowerSettingsNewIcon from '@mui/icons-material/PowerSettingsNew';
import sang_logo from '../assets/sang_logo.png';
import { useNavigate } from 'react-router-dom';



const settings = ['Profile', 'Account', 'Dashboard', 'Logout'];

function NavBar() {
  const navigate = useNavigate()

  const [anchorElNav, setAnchorElNav] = React.useState(null);
  const [anchorElUser, setAnchorElUser] = React.useState(null);
  const [anchorEl, setAnchorEl] = React.useState(null);
  

  const handleProductClick = (e) => {
    e.preventDefault();
    navigate('/product')

  };



  const handleClose = () => {
    setAnchorEl(null);
  };
  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };
  const handleOpenNavMenu = (event) => {
    setAnchorElNav(event.currentTarget);
  };

  const handleOpenUserMenu = (event) => {
    setAnchorElUser(event.currentTarget);
  };

  const handleCloseNavMenu = () => {
    setAnchorElNav(null);
  };


  const handleCloseUserMenu = () => {
    setAnchorElUser(null);
  };

  const onClickLog = () => {
    navigate('/')
}

const handleTransaction=()=>{
  navigate('/Transaction')
}
  return (
    <>
    <AppBar position="static" sx={{ bgcolor: '#0583D2', boxShadow: "5px 5px 15px rgba(0, 0, 0, 0.6)", marginBottom: '3px', }}>
      <Container maxWidth="xl">
        <Toolbar disableGutters>

          <Avatar alt="Logo" src={sang_logo} sx={{ mr: 2, width: 60, height: 60 }} />


          <Box sx={{ flexGrow: 1, display: { xs: 'flex', md: 'none' } }}>
            <IconButton
              size="large"
              aria-label="account of current user"
              aria-controls="menu-appbar"
              aria-haspopup="true"
              onClick={handleOpenNavMenu}
              color="inherit"
            >
              <MenuIcon />
            </IconButton>
            <Menu
              id="menu-appbar"
              anchorEl={anchorElNav}
              anchorOrigin={{
                vertical: 'bottom',
                horizontal: 'left',
              }}
              keepMounted
              transformOrigin={{
                vertical: 'top',
                horizontal: 'left',
              }}
              open={Boolean(anchorElNav)}
              onClose={handleCloseNavMenu}
              sx={{
                display: { xs: 'block', md: 'none' },
              }}
            >
              <MenuItem onClick={handleCloseNavMenu}>
                <Typography textAlign="center" >MASTERS</Typography>
              </MenuItem>
              <MenuItem onClick={handleCloseNavMenu}>
                <Typography textAlign="center">FINANCIAL</Typography>
              </MenuItem>
              <MenuItem onClick={handleCloseNavMenu}>
                <Typography textAlign="center">REPORTS</Typography>
              </MenuItem>
              <MenuItem onClick={handleCloseNavMenu}>
                <Typography textAlign="center">SETTING</Typography>
              </MenuItem>
            </Menu>
          </Box>


          <Box sx={{
            flexGrow: 1, display: { xs: 'none', md: 'flex' }, alignItems: 'center',
            justifyContent: 'start',
          }}>

            <Button
              aria-controls="master-menu"
              aria-haspopup="true"
              onClick={handleClick}
              variant="#00498E"
              sx={{
                mr: 0,
                bgcolor: '#0583D2',
                color: 'white',
              }}
            >
              Master
            </Button>
            <Menu
              id="master-menu"
              anchorEl={anchorEl}
              open={Boolean(anchorEl)}
              onClose={handleClose}
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

            <Button
              variant="#00498E"
              sx={{
                mr: 0,
                bgcolor: '#0583D2',
                color: 'white',
              }}
            >
              FINANCIALS
            </Button>
            <Button
              variant="#00498E"
              sx={{
                mr: 0,
                bgcolor: '#0583D2',
                color: 'white',
              }}
            >
              REPORTS
            </Button>
            <Button
              variant="#0583D2"
              sx={{
                mr: 0,
                bgcolor: '#0583D2',
                color: 'white',
              }}
            >
              SETTING
            </Button>
            <Button
              variant="#0583D2"
              onClick={handleTransaction}

              sx={{
                mr: 0,
                bgcolor: '#0583D2',
                color: 'white',
              }}
            >
              Transaction
            </Button>

          </Box>


          <Box sx={{ flexGrow: 0, }}>
            <SettingsIcon sx={{ marginRight: '20px' }} />
            < PowerSettingsNewIcon sx={{ marginRight: '20px' }} onClick={onClickLog}/>
          </Box>

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


