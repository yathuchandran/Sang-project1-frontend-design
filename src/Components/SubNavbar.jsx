import React from 'react'
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Container from '@mui/material/Container';
import SettingsIcon from '@mui/icons-material/Settings';
import PowerSettingsNewIcon from '@mui/icons-material/PowerSettingsNew';
import HomeIcon from '@mui/icons-material/Home';
import Toolbar from '@mui/material/Toolbar';


function SubNavbar() {
    const onClickClose = () => {
        Navigate('/user3/dashboard')
    }
    const onClickLog = () => {
        Navigate('/')
    }
  return (
    <div>
        <AppBar position="static" sx={{ bgcolor: '#B8E3FF', boxShadow: "5px 5px 15px rgba(0, 0, 0, 0.2)", height: '40px' }}>
                <Container maxWidth="xl">
                    <Toolbar disableGutters >
                        <Box sx={{
                            flexGrow: 0, justifyContent: 'center', display: 'flex', marginBottom: '20px', alignItems: 'center', marginLeft: '20px'
                        }}>
                            <HomeIcon sx={{ color: 'black', }} onClick={onClickClose} />

                        </Box>
                        <Box sx={{
                            flexGrow: 1, display: { xs: 'none', md: 'flex' }, alignItems: 'center',
                            justifyContent: 'start',
                        }}>
                           
                        </Box>

                        <Box sx={{ flexGrow: 0, justifyContent: 'center', display: 'flex', marginBottom: '20px', alignItems: 'center', }}>
                            <SettingsIcon sx={{ marginRight: '20px', color: 'black', }} />
                            < PowerSettingsNewIcon sx={{ marginRight: '20px', color: 'black' }} onClick={onClickLog} />
                        </Box>
                    </Toolbar>
                </Container>
            </AppBar>

    </div>
  )
}

export default SubNavbar