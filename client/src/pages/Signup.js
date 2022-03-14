import React, { useState } from 'react';
import { useMutation } from '@apollo/client';
import Auth from '../utils/auth';
import { ADD_PROFILE } from '../utils/mutations';
import { Grid, Paper } from '@material-ui/core';
import AddCircleOutlinedPutlinedIcon from '@material-ui/icons/AddCircleOutlineOutlined';
const Signup = () => {
    const paperStyle = { padding: '30px 20px', width: 300, margin: '20px auto' }
    const headerStyle = { margin: 0 }
    const avatarStyle = { backgroundColor: 'blue' }
    const [formState, setFormState] = useState({
        name: '',
        email: '',
        password: '',
    });
    const [addProfile, { error, data }] = useMutation(ADD_PROFILE);
    // update state based on form input changes
    const handleChange = (event) => {
        const { name, value } = event.target;

        setFormState({
            ...formState,
            [name]: value,
        });
    };
    // submit form
    const handleFormSubmit = async (event) => {
        event.preventDefault();
        console.log(formState);

        try {
            const { data } = await addProfile({
                variables: { ...formState },
            });

            Auth.login(data.addProfile.token);
        } catch (e) {
            console.error(e);
        }
    };
    return (
        <Grid>
            <Paper elevation={20} style={paperStyle}>
                <Grid align='center'>
                    <Avatar style={avatarStyle}>
                        <AddCircleOutlinedPutlinedIcon />
                    </Avatar>

                    <h2 style={headerStyle}>Sign Up</h2>
                    <Typography variant='caption' gutterBottom>Please fill this account to create an account!</Typography>
                </Grid>
                <form onSubmit={handleFormSubmit}>
                    <TextField fullWidth label='Username' placeholder="Enter your name"
                        type='text'
                        value={formState.name}
                        onChange={handleChange} />
                    <TextField fullWidth label='Email'
                        value={formState.email}
                        onChange={handleChange} />
                    <TextField fullWidth label='Password'
                        placeholder="******"
                        type="password"
                        value={formState.password}
                        onChange={handleChange} />
                    <TextField fullWidth label='Confirm Password' placeholder="******"
                        value={formState.password}
                        onChange={handleChange} />
                    <Button type='submit' variant='contained' color='primary'>Sign up</Button>

                </form>
            </Paper>
        </Grid>
    );
};

export default Signup;