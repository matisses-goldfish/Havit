import React from 'react';
import Box from '@mui/material/Box';
import Paper from '@mui/material/Paper';

function Home(){
    return(
       <Box
      sx={{
        display: 'flex',
        flexWrap: 'wrap',
        '& > :not(style)': {
          m: 1,
          width: 350,
          height: 300,
        },
      }}
    >
      <Paper elevation={0} /> 
      {/*Import Login */}
      <Paper />
      {/*Import Signup */}
      <Paper elevation={3} />
    </Box>
    );
}

export default Home; 