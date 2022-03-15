import React from 'react';
import Box from '@mui/material/Box';
import Paper from '@mui/material/Paper';
import TextField from '@mui/material/TextField';

function Newhabit() {
    return (
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
            <h3>Creat a new goal</h3>
            <TextField id="outlined-basic" label="Question" variant="outlined" />
            <TextField id="outlined-basic" label="Type" variant="outlined" />
            <TextField id="outlined-basic" label="Date" variant="outlined" />
            <Paper />
            {/*Import Calendar*/}
            <Paper elevation={3} />
        </Box>
    );
}

export default Newhabit;