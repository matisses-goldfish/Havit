import React from 'react';
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import Typography from '@mui/material/Typography';

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
        <Card sx={{ minWidth: 275 }}>
            <CardContent>
                <Typography sx={{ fontSize: 14 }} color="text.secondary" gutterBottom>
                  <h2>Public Profile</h2> 
                </Typography>
                <Typography variant="h5" component="div">
                    {/*User name */} Username
                    {/*User profile Picture */}
                </Typography>
            </CardContent>
        </Card>
        <Card sx={{ minWidth: 345 }}>
            <CardContent>
                <Typography sx={{ fontSize: 14 }} color="text.secondary" gutterBottom>
                    <h2>Update Information</h2>
                </Typography>
                <TextField id="outlined-basic" label="Name" variant="outlined" />
                <TextField id="outlined-basic" label="Pronouns" variant="outlined" />
                <TextField id="outlined-basic" label="Bio" variant="outlined" />   
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
            </CardContent>
        </Card>
        </Box>
    );
}

export default Profile;