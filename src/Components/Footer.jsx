import * as React from 'react';
import CssBaseline from '@mui/material/CssBaseline';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import Container from '@mui/material/Container';

const defaultTheme = createTheme();

export default function StickyFooter() {
  return (
    <ThemeProvider theme={defaultTheme}>
      <Box
        sx={{
          display: 'flex',
          flexDirection: 'column',
          minHeight: '70vh',
        }}
      >
        <CssBaseline />
        {/*  */}
        <Box
          component="footer"
          sx={{
            py: 3,
            px: 2,
            mt: 'auto',
            backgroundColor: "#0581D0",
          }}
        >
          <Container maxWidth="sm">
            {/* <Typography variant="body1">
              My sticky footer can be found here.
            </Typography> */}
          </Container>
        </Box>
      </Box>
    </ThemeProvider>
  );
}
