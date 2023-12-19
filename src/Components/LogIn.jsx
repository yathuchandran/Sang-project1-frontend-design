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
import sang_logo from '../assets/sang_logo.png';


const defaultTheme = createTheme();

function LogIn() {

  const navigate =useNavigate()


  const handleSubmit = (event) => {
    event.preventDefault();
    const data = new FormData(event.currentTarget);
    const email = data.get('email'); // Retrieve the 'email' value from form data
    console.log({
      email: data.get('email'),
      password: data.get('password'),
    });

    if (email === 'user1') {
      navigate('/home')
    } else if (email === 'user2') {
      navigate('/user2/main');
    } else if (email === 'user3') {
    
      navigate('/user3/dashboard');
    }
  };

  const StyledImage = styled('img')({
    width: '58%',
    height:'100%'
  });



  return (
    // <ThemeProvider theme={defaultTheme}>
    //   <Grid container component="main" sx={{ height: '100vh' }}>
    //     <CssBaseline />
    //     <Grid
    //       item
    //       xs={false}
    //       sm={4}
    //       md={7}
    //       sx={{
    //         // backgroundImage: 'url(https://source.unsplash.com/random?wallpapers)',
    //         // backgroundRepeat: 'no-repeat',
    //         // backgroundColor: (t) =>
    //           // t.palette.mode === 'light' ? t.palette.grey[50] : t.palette.grey[900],
    //         // backgroundSize: 'cover',
    //         // backgroundPosition: 'center',
    //       }}
    //     />
    //     {/* <img src={BackImage} alt="" */}
    //    <StyledImage
    //    src={BackImage}
    //    alt=""
    //    sx={{
    //      // Other styling if needed
    //    }}
    //  />
    //     <Grid item xs={12} sm={8} md={5} component={Paper} elevation={6} square>
    //       <Box
    //         sx={{
    //           my: 18,
    //           mx: 4,
    //           display: 'flex',
    //           flexDirection: 'column',
    //           alignItems: 'center',
    //           // backgroundColor: 'lightblue', // Change this to your desired color

    //         }}
    //       >
           
    //         <Typography component="h1" variant="h5">
    //           LOGIN
    //         </Typography>
    //         <Box component="form" onSubmit={handleSubmit} sx={{ mt: 1 }}>
    //           <TextField
    //             margin="normal"
    //             required
    //             fullWidth
    //             id="email"
    //             label="Email Address"
    //             name="email"
    //             autoComplete="email"
    //             autoFocus
    //           />
    //           <TextField
    //             margin="normal"
    //             required
    //             fullWidth
    //             name="password"
    //             label="Password"
    //             type="password"
    //             id="password"
    //             autoComplete="current-password"
    //           />
    //           <Grid container>
    //             <Grid item xs>
    //               <FormControlLabel
    //                 control={<Checkbox value="remember" color="primary" />}
    //                 label="Remember me"
    //               />
    //             </Grid>
    //             <Grid item>
    //               <Link href="#" variant="body2">
    //                 Forgot password?
    //               </Link>
    //             </Grid>
    //           </Grid>
    //           <Button
    //             type="submit"
    //             fullWidth
    //             variant="contained"
    //             sx={{
    //               mt: 3, mb: 2, backgroundColor: 'black',
    //               color: 'white',
    //             }}
    //           >
    //             LOGIN
    //           </Button>
    //         </Box>
    //         <Grid container justifyContent="center">
    //           <Grid item>
    //             <Avatar sx={{ m: 1, bgcolor: '#1877F2' }}>
    //               <FacebookRoundedIcon />
    //             </Avatar>
    //           </Grid>
    //           <Grid item>
    //             <Avatar sx={{ m: 1, bgcolor: '#1877F2' }}>
    //               < TwitterIcon />
    //             </Avatar>
    //           </Grid>
    //         </Grid>
    //       </Box>
    //     </Grid>
    //   </Grid>
    // </ThemeProvider>


    <>
    <div className="flex mt-20 w-full max-w-sm mx-auto overflow-hidden rounded-lg shadow-lg dark:bg-gray-800 lg:max-w-4xl" style={{backgroundColor:'#F2F3F5'}}>
    <div className="hidden bg-cover lg:block lg:w-1/2" style={{ backgroundImage: `url(${BackImage})`, width: '50%' }}>
      <img className="login" src={BackImage} alt=""
      style={{height:'96%'}} />
    </div>
    
        <div className="w-full px-6 py-8 md:px-8 lg:w-1/2">
            <div className="flex justify-center mx-auto">
                <img className="w-auto h-7 sm:h-8" src={sang_logo} alt="" />
            </div>
    
            <p className="mt-3 text-xl text-center text-gray-600 dark:text-gray-200">
                Welcome back!
            </p>
    
            <a href="#" className="flex items-center justify-center mt-4 text-gray-600 transition-colors duration-300 transform border rounded-lg dark:border-gray-700 dark:text-gray-200 hover:bg-gray-50 dark:hover:bg-gray-600">
                <div className="px-4 py-2">
                    <svg className="w-6 h-6" viewBox="0 0 40 40">
                        <path d="M36.3425 16.7358H35V16.6667H20V23.3333H29.4192C28.045 27.2142 24.3525 30 20 30C14.4775 30 10 25.5225 10 20C10 14.4775 14.4775 9.99999 20 9.99999C22.5492 9.99999 24.8683 10.9617 26.6342 12.5325L31.3483 7.81833C28.3717 5.04416 24.39 3.33333 20 3.33333C10.7958 3.33333 3.33335 10.7958 3.33335 20C3.33335 29.2042 10.7958 36.6667 20 36.6667C29.2042 36.6667 36.6667 29.2042 36.6667 20C36.6667 18.8825 36.5517 17.7917 36.3425 16.7358Z" fill="#FFC107" />
                        <path d="M5.25497 12.2425L10.7308 16.2583C12.2125 12.59 15.8008 9.99999 20 9.99999C22.5491 9.99999 24.8683 10.9617 26.6341 12.5325L31.3483 7.81833C28.3716 5.04416 24.39 3.33333 20 3.33333C13.5983 3.33333 8.04663 6.94749 5.25497 12.2425Z" fill="#FF3D00" />
                        <path d="M20 36.6667C24.305 36.6667 28.2167 35.0192 31.1742 32.34L26.0159 27.975C24.3425 29.2425 22.2625 30 20 30C15.665 30 11.9842 27.2359 10.5975 23.3784L5.16254 27.5659C7.92087 32.9634 13.5225 36.6667 20 36.6667Z" fill="#4CAF50" />
                        <path d="M36.3425 16.7358H35V16.6667H20V23.3333H29.4192C28.7592 25.1975 27.56 26.805 26.0133 27.9758C26.0142 27.975 26.015 27.975 26.0158 27.9742L31.1742 32.3392C30.8092 32.6708 36.6667 28.3333 36.6667 20C36.6667 18.8825 36.5517 17.7917 36.3425 16.7358Z" fill="#1976D2" />
                    </svg>
                </div>
    
                <span className="w-5/6 px-4 py-3 font-bold text-center">Sign in with Google</span>
            </a>
    
            <div className="flex items-center justify-between mt-4">
                <span className="w-1/5 border-b dark:border-gray-600 lg:w-1/4"></span>
    
                <a href="#" className="text-xs text-center text-gray-500 uppercase dark:text-gray-400 hover:underline">or login
                    with email</a>
    
                <span className="w-1/5 border-b dark:border-gray-400 lg:w-1/4"></span>
            </div>
            <form onSubmit={handleSubmit}>
    
            <div className="mt-4">
                <label className="block mb-2 text-sm font-medium text-gray-600 dark:text-gray-200" for="email">Email Address</label>
                <input id="email" name='email' className="block w-full px-4 py-2 text-gray-700 bg-white border rounded-lg dark:bg-gray-800 dark:text-gray-300 dark:border-gray-600 focus:border-blue-400 focus:ring-opacity-40 dark:focus:border-blue-300 focus:outline-none focus:ring focus:ring-blue-300"     required />
            </div>
    
            <div className="mt-4">
                <div className="flex justify-between">
                    <label className="block mb-2 text-sm font-medium text-gray-600 dark:text-gray-200" for="loggingPassword">Password</label>
                    <a href="#" className="text-xs text-gray-500 dark:text-gray-300 hover:underline">Forget Password?</a>
                </div>
    
                <input id="loggingPassword" className="block w-full px-4 py-2 text-gray-700 bg-white border rounded-lg dark:bg-gray-800 dark:text-gray-300 dark:border-gray-600 focus:border-blue-400 focus:ring-opacity-40 dark:focus:border-blue-300 focus:outline-none focus:ring focus:ring-blue-300" type="password" required />
            </div>
    
            <div className="mt-6">
            <button className="signButton w-full px-6 py-3 text-sm font-medium tracking-wide transition-colors duration-300 transform hover:bg-blue-500 focus:outline-none focus:ring focus:ring-gray-300 focus:ring-opacity-50" onSubmit={handleSubmit}>
    Sign In
</button>
            </div>
    </form>
  
            <div className="flex items-center justify-between mt-4">
                <span className="w-1/5 border-b dark:border-gray-600 md:w-1/4"></span>
    
                <a href="#" className="text-xs text-gray-500 uppercase dark:text-gray-400 hover:underline">or sign up</a>
    
                <span className="w-1/5 border-b dark:border-gray-600 md:w-1/4"></span>
            </div>
            <Grid container justifyContent="center">
              <Grid item>
                <Avatar sx={{ m: 1,  bgcolor: '#1877F2' }}>
                  <FacebookRoundedIcon />
               </Avatar>
              </Grid>
               <Grid item>
                 <Avatar sx={{ m: 1, bgcolor: '#1877F2' }}>
                   < TwitterIcon />
                 </Avatar>
               </Grid>
             </Grid>
        </div>
    </div>
        </>
  );
}

export default LogIn;








// import * as React from 'react';
// import Button from '@mui/material/Button';

// function LogIn() {
//   return <Button variant="contained">Hello world</Button>;
// }
// export default LogIn
