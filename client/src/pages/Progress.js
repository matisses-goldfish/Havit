import React from 'react';
import Box from '@mui/material/Box';
import Paper from '@mui/material/Paper';
import TextField from '@mui/material/TextField';
import Slider from '@mui/material/Slider';

function Progress() {
    return (
        <Box
            sx={{
                display: 'flex',
                '& > :not(style)': {
                    m: 1,
                    width: 128,
                    height: 128,
                },
            }}
        >
            <Paper elevation={0}
            />
            <h1>Welcome back...</h1>
            <h3>Question 1?</h3>
            <Slider defaultValue={50} aria-label="Default" valueLabelDisplay="auto" />
            <h3>Question 2?</h3>
            <Slider defaultValue={50} aria-label="Default" valueLabelDisplay="auto" />
            <h3>Question 3?</h3>
            <Slider defaultValue={50} aria-label="Default" valueLabelDisplay="auto" />
            <h3>Text Iput Question</h3>
            <TextField id="filled-basic" label="Filled" variant="filled" />
        </Box>
    );
}

export default Progress;