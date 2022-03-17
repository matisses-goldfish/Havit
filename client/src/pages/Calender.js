import React from 'react';
import Box from '@mui/material/Box';
import Paper from '@mui/material/Paper';
import CalendarComponent from '../components/Calendar';

function Calendar(){
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
      <Paper elevation={2} /> 
        <CalendarComponent/>
      <Paper />
    </Box>
    );
}

export default Calendar;