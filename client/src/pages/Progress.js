// TODO list:
// 1. we need to map the questions in relation to the habits in the database connected by the User Id
// 2. We need to create an onclick function for the button to collect the data the user has given us
// 3. We need to iniatalize the handleSubmit

import React from 'react';
import Box from '@mui/material/Box';
import CssBaseline from '@mui/material/CssBaseline';
import Container from '@mui/material/Container';
import Typography from '@mui/material/Typography';
import Slider from '@mui/material/Slider';
import { styled } from '@mui/material/styles';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';


// functions and const that allow us to apply some styling to the questions
function valuetext(value) {
    return `${value}`;
}

const Separator = styled('div')(
    ({ theme }) => `
    height: ${theme.spacing(5)};
  `,
);

  export default function Progress() {
    const handleSubmit = (event) => {
      event.preventDefault();
      const data = new FormData(event.currentTarget);
      console.log({
        email: data.get('email'),
        password: data.get('password'),
      });
    };

    return (
        <React.Fragment>
        <CssBaseline />
        <Container sx={{ m: 4 }}>
          <grid>
            <Box sx={{ bgcolor: '#FFFFFF', height: '100vh', width:'160vh', p: 7}} textAlign='center'>
            <Typography variant="h2" component="h1" align="center">
              Welcome Back
            </Typography>
            <Separator />
            {/* TODO: !!! */}
            <Typography variant="h5" component="h1" align="center">
              Question 1: On a scale of 1-10 how is your water intake?
            </Typography>
            <Slider
                aria-label="Progress"
                defaultValue={3}
                getAriaValueText={valuetext}
                valueLabelDisplay="auto"
                step={1}
                marks
                min={1}
                max={10}
            />
            <Separator />
            {/* TODO: !!! */}
            <Typography variant="h5" component="h1" align="center">
            Question 2: On a scale of 1-10 how was your sleep last night?
            </Typography>
            <Slider
                aria-label="Progress"
                defaultValue={3}
                getAriaValueText={valuetext}
                valueLabelDisplay="auto"
                step={1}
                marks
                min={1}
                max={10}
            />
            <Separator />
            {/* TODO: !!! */}
            <Typography variant="h5" component="h1" align="center">
              Question 3: On a scale of 1-10 how would rate your stress level?
            </Typography>
            <Slider
                aria-label="Progress"
                defaultValue={3}
                getAriaValueText={valuetext}
                valueLabelDisplay="auto"
                step={1}
                marks
                min={1}
                max={10}
            />
            <Separator />
            {/* TODO: !!! */}
            <Typography variant="h5" component="h1" align="center">
              Question 4: Please share your thoughts on how you think you will improve your personal and professional self today? Remember that small steps lead to big progress
            </Typography>
            <TextField 
            fullWidth 
            multiline
            rows={5} 
            label="Share your thoughts..." 
            id="fullWidth" />
            <Separator />
            {/* TODO: Add button onclick data submission */}
            <Button href="/dailyhabitdashboard"variant="contained" size="large">
            Continue
            </Button>

            </Box>
          </grid>
        </Container>
      </React.Fragment>
    );
}