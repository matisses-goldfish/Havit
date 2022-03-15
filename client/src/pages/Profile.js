import React from 'react';
import Box from '@mui/material/Box';
import Paper from '@mui/material/Paper';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';

function Profile() {
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
                <h3>Public Profile</h3>
                {/*Add User */}
            </Paper>
            <Paper variant="outlined" square>
                <h3>Update Information</h3>
                <TextField id="outlined-basic" label="Name" variant="outlined" /> 
                <TextField id="outlined-basic" label="Pronouns" variant="outlined" />
                <TextField id="outlined-basic" label="Bio" variant="outlined" />
                <Box
                    component="form"
                    sx={{
                        '& .MuiTextField-root': { m: 1, width: '25ch' },
                    }}
                    noValidate
                    autoComplete="off"
                >

                    <div>
                        <TextField
                            required
                            id="filled-required"
                            label="Required"
                            defaultValue="Email"
                            variant="filled"
                        />
                        <TextField
                            id="filled-password-input"
                            label="Password"
                            type="password"
                            autoComplete="current-password"
                            variant="filled"
                        />
                        <Button variant="contained">Update</Button>
                    </div>
                </Box>
            </Paper>
        </Box>
    );
}

export default Profile;