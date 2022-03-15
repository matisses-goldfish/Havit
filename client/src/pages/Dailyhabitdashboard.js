import React from 'react';
import Box from '@mui/material/Box';
import Paper from '@mui/material/Paper';
import Checkbox from '@mui/material/Checkbox';
import FormControlLabel from '@mui/material/FormControlLabel';

function Dailyhabitdash() {
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
            <Paper variant="outlined">
                <h3>Welcome back</h3>
                <h4>Daily Habits:</h4>
                <FormControlLabel
                    value="start"
                    control={<Checkbox />}
                    label="Begginer"
                    labelPlacement="start"
                />
                <FormControlLabel
                    value="start"
                    control={<Checkbox />}
                    label="Medium"
                    labelPlacement="start"
                />
                <FormControlLabel
                    value="start"
                    control={<Checkbox />}
                    label="Mater"
                    labelPlacement="start"
                />
            </Paper>
            <Paper variant="outlined" square>
                <h3>Stats</h3>
                {/*Import Stats Chart*/}
            </Paper>
        </Box>
    );
}

export default Dailyhabitdash;