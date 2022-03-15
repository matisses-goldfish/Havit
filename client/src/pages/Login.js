import React from 'react';
import { Grid, Paper } from '@material-ui/core';
import LockOutlinedIcon from '@mui/icons-material/LockOutlined';
import FormGroup from '@mui/material/FormGroup';
import FormControlLabel from '@mui/material/FormControlLabel';
import Checkbox from '@mui/material/Checkbox';
import { Button } from '@mui/material';

function Login() {
    const paperStyle = { padding: 20, height: '70vh', width: 200, margin: "20px auto" }
    const avatarStyle = { backgroundColor: 'blue' }
    return (
        <Grid>
            <Paper elevation={10} style={paperStyle}>
                <Grid align='center'>
                    <Avatar style={avatarStyle}> <LockOutlinedIcon /></Avatar>
                    <h2>LogIn</h2>
                </Grid>
                <TextField lable='Username' placeholder='Enter username' fullWidth required />
                <TextField lable='Password' placeholder='Enter password' type='password' fullWidth required />
                <FormGroup>
                    <FormControlLabel control={<Checkbox defaultChecked />} label="Remember me" />
                </FormGroup>
                <Button type='submit' color='primary' variant="contained" fullWidth>Login</Button>
            </Paper>
        </Grid>
    );
}

export default Login;