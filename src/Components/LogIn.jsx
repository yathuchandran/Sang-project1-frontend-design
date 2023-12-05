import * as React from 'react';
import Avatar from '@mui/material/Avatar';
import Button from '@mui/material/Button';
import CssBaseline from '@mui/material/CssBaseline';
import TextField from '@mui/material/TextField';
import FormControlLabel from '@mui/material/FormControlLabel';
import Checkbox from '@mui/material/Checkbox';
import Link from '@mui/material/Link';
import Paper from '@mui/material/Paper';
import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';
import LockOutlinedIcon from '@mui/icons-material/LockOutlined';
import FacebookRoundedIcon from '@mui/icons-material/FacebookRounded';
import TwitterIcon from '@mui/icons-material/Twitter';
import Typography from '@mui/material/Typography';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import { useNavigate } from 'react-router-dom';
import BackImage from '../assets/login_bg.jpg';
import { styled } from '@mui/system';


const defaultTheme = createTheme();

function LogIn() {

  const navigate =useNavigate()


  const handleSubmit = (event) => {
    event.preventDefault();
    const data = new FormData(event.currentTarget);
    console.log({
      email: data.get('email'),
      password: data.get('password'),
    });
    navigate('/home')
  };

  const StyledImage = styled('img')({
    width: '58%',
    height:'100%'
  });



  return (
    <ThemeProvider theme={defaultTheme}>
      <Grid container component="main" sx={{ height: '100vh' }}>
        <CssBaseline />
        <Grid
          item
          xs={false}
          sm={4}
          md={7}
          sx={{
            // backgroundImage: 'url(https://source.unsplash.com/random?wallpapers)',
            // backgroundRepeat: 'no-repeat',
            // backgroundColor: (t) =>
              // t.palette.mode === 'light' ? t.palette.grey[50] : t.palette.grey[900],
            // backgroundSize: 'cover',
            // backgroundPosition: 'center',
          }}
        />
        {/* <img src={BackImage} alt="" */}
       <StyledImage
       src={BackImage}
       alt=""
       sx={{
         // Other styling if needed
       }}
     />
        <Grid item xs={12} sm={8} md={5} component={Paper} elevation={6} square>
          <Box
            sx={{
              my: 18,
              mx: 4,
              display: 'flex',
              flexDirection: 'column',
              alignItems: 'center',
              // backgroundColor: 'lightblue', // Change this to your desired color

            }}
          >
           
            <Typography component="h1" variant="h5">
              LOGIN
            </Typography>
            <Box component="form" onSubmit={handleSubmit} sx={{ mt: 1 }}>
              <TextField
                margin="normal"
                required
                fullWidth
                id="email"
                label="Email Address"
                name="email"
                autoComplete="email"
                autoFocus
              />
              <TextField
                margin="normal"
                required
                fullWidth
                name="password"
                label="Password"
                type="password"
                id="password"
                autoComplete="current-password"
              />
              <Grid container>
                <Grid item xs>
                  <FormControlLabel
                    control={<Checkbox value="remember" color="primary" />}
                    label="Remember me"
                  />
                </Grid>
                <Grid item>
                  <Link href="#" variant="body2">
                    Forgot password?
                  </Link>
                </Grid>
              </Grid>
              <Button
                type="submit"
                fullWidth
                variant="contained"
                sx={{
                  mt: 3, mb: 2, backgroundColor: 'black',
                  color: 'white',
                }}
              >
                LOGIN
              </Button>
            </Box>
            <Grid container justifyContent="center">
              <Grid item>
                <Avatar sx={{ m: 1, bgcolor: '#1877F2' }}>
                  <FacebookRoundedIcon />
                </Avatar>
              </Grid>
              <Grid item>
                <Avatar sx={{ m: 1, bgcolor: '#1877F2' }}>
                  < TwitterIcon />
                </Avatar>
              </Grid>
            </Grid>
          </Box>
        </Grid>
      </Grid>
    </ThemeProvider>
  );
}

export default LogIn;








// import * as React from 'react';
// import Button from '@mui/material/Button';

// function LogIn() {
//   return <Button variant="contained">Hello world</Button>;
// }
// export default LogIn
