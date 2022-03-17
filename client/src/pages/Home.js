import React from 'react';
import Box from '@mui/material/Box';
import CssBaseline from '@mui/material/CssBaseline';
import Container from '@mui/material/Container';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';

// TODO: add functionality for get started button

function Home(){
    return(
      <React.Fragment>
      <CssBaseline />
      <Container sx={{ m: 4 }}>
        <grid>
          <Box sx={{ bgcolor: '#FFFFFF', height: '70vh', width:'160vh', p: 7}} textAlign='center'>
          <Typography variant="h2" component="h1" align="center">
            Being your quest to personal and professional success!
          </Typography>
          <Typography variant="h5" component="h1" align="center">
            Build and develop habits to create a healther environment for your mental and physical self.
          </Typography>

          <Button
                type="submit"
                href="/signup"
                variant="contained"
                size="large"
                sx={{ mt: 3, mb: 2 }}
              >
                Get Started
              </Button>
          </Box>
        </grid>
      </Container>
    </React.Fragment>
    );
}

export default Home; 