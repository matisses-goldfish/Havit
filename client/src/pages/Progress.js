import React from 'react';
import Box from '@mui/material/Box';
import CssBaseline from '@mui/material/CssBaseline';
import Container from '@mui/material/Container';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';


function Progress() {
    return (
        <React.Fragment>
        <CssBaseline />
        <Container sx={{ m: 4 }}>
          <grid>
            <Box sx={{ bgcolor: '#FFFFFF', height: '70vh', width:'160vh', p: 7}} textAlign='center'>
            <Typography variant="h2" component="h1" align="center">
              Welcome Back...
            </Typography>

            
            </Box>
          </grid>
        </Container>
      </React.Fragment>
    );
}

export default Progress;