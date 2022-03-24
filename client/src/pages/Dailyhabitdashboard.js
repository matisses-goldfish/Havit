// TODO: Import habit
// TODO: Import Chart
// TODO: both chart and habits have not been rendering

// Customize data to render users username
import React, { useState } from "react";
import Box from '@mui/material/Box';
import CssBaseline from '@mui/material/CssBaseline';
import Container from '@mui/material/Container';
import Grid from '@mui/material/Grid';
import Typography from '@mui/material/Typography';
import AddIcon from '@mui/icons-material/Add';
import Button from '@mui/material/Button';
import { styled } from '@mui/material/styles';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import Checkbox from '@mui/material/Checkbox';
import List from '@mui/material/List';

import AdapterDateFns from '@mui/lab/AdapterDateFns';
import LocalizationProvider from '@mui/lab/LocalizationProvider';
import StaticDatePicker from '@mui/lab/StaticDatePicker';

// import Chart from '../components/Chart';
// import HabitList from '../components/HabitList';



const Separator = styled('div')(
    ({ theme }) => `
    height: ${theme.spacing(5)};
  `,
);

const Separator2 = styled('div')(
    ({ theme }) => `
    height: ${theme.spacing(2)};
  `,
);

function Dailyhabitdash() {

    return (
        <React.Fragment>
        <CssBaseline />
        <Container  sx={{height: '100vh', p: 7}}>
        <Grid container spacing={2} columns={16}> 
        <Grid xs={8}>
            <Box
            sx={{ 
                bgcolor: '#FFFFFF', 
                height: '90vh', 
                width:'70vh', 
                border: 3,
                p: 3}}
                >
                <Grid> 
                {/* TODO: add date */}
                    <Typography variant="h2" component="h1" align="left">
                        Welcome Back!
                    </Typography>
                    {/* TODO add user info */}
                    <Typography variant="h4" component="h1" align="left">
                        {/* {user.userName} */}
                        
                    </Typography>
                </Grid>
                <Separator2 />
                <Grid>
                    <Button variant="outlined" href="/newHabit" startIcon={<AddIcon />}>
                    Create Habit
                    </Button>
                    <Separator2 />
                </Grid>
                <Grid sx={{ p: 2}} >
                    <Typography variant="h4" component="h1" align="left">
                        Daily Habits:
                    </Typography>
                    <Separator2/>
                    <List style={{maxHeight: 370, overflow: 'auto'}}>
                        {/* card 1 */}
                        <Card sx={{ border: 2, height: '17vh'}}>
                        <Grid container columns={12}>
                        <Grid xs={10}>
                            <CardContent>
                            <Typography variant="subtitle1" component="h1" align="left">
                                Beginner 
                            </Typography>
                            <Typography variant="h4" component="h1" align="left">
                                Sleep 
                            </Typography>
                            <Typography variant="h6" component="h1" align="left">
                                Date created: March 2nd 2022 
                            </Typography>
                            </CardContent>
                        </Grid>
                        <Grid  xs={2}>
                        <Checkbox
                            sx={{ '& .MuiSvgIcon-root': { fontSize: 40 } }}/>
                        </Grid>
                        </Grid>
                        </Card>
                        <Separator2/>

                        {/* card 2 */}
                        <Card sx={{ border: 2, height: '17vh'}}>
                        <Grid container columns={12}>
                        <Grid xs={10}>
                            <CardContent>
                            <Typography variant="subtitle1" component="h1" align="left">
                                Intermediate 
                            </Typography>
                            <Typography variant="h4" component="h1" align="left">
                                Read 
                            </Typography>
                            <Typography variant="h6" component="h1" align="left">
                                Date created: Febuary 14th 2022 
                            </Typography>
                            </CardContent>
                        </Grid>
                        <Grid  xs={2}>
                        <Checkbox
                            sx={{ '& .MuiSvgIcon-root': { fontSize: 40 } }}/>
                        </Grid>
                        </Grid>
                        </Card>
                        <Separator2/>

                        {/* card 3 */}
                        <Card sx={{ border: 2, height: '17vh'}}>
                        <Grid container columns={12}>
                        <Grid xs={10}>
                            <CardContent>
                            <Typography variant="subtitle1" component="h1" align="left">
                                Master 
                            </Typography>
                            <Typography variant="h4" component="h1" align="left">
                                Meditation 
                            </Typography>
                            <Typography variant="h6" component="h1" align="left">
                                Date created: January 1st 2022 
                            </Typography>
                            </CardContent>
                        </Grid>
                        <Grid  xs={2}>
                        <Checkbox
                            sx={{ '& .MuiSvgIcon-root': { fontSize: 40 } }}/>
                        </Grid>
                        </Grid>
                        </Card>
                        <Separator2/>
                        {/* card 4 */}

                        <Card sx={{ border: 2, height: '17vh'}}>
                        <Grid container columns={12}>
                        <Grid xs={10}>
                            <CardContent>
                            <Typography variant="subtitle1" component="h1" align="left">
                                Beginner
                            </Typography>
                            <Typography variant="h4" component="h1" align="left">
                                Self Care 
                            </Typography>
                            <Typography variant="h6" component="h1" align="left">
                                Date created: March 18th 2022 
                            </Typography>
                            </CardContent>
                        </Grid>
                        <Grid  xs={2}>
                        <Checkbox
                            sx={{ '& .MuiSvgIcon-root': { fontSize: 40 } }}/>
                        </Grid>
                        </Grid>
                        </Card>
                    </List>
                </Grid>
            </Box>
        </Grid>

        <Grid xs={8}>
            <Box
                sx={{ 
                    bgcolor: '#FFFFFF', 
                    height: '90vh', 
                    width:'70vh', 
                    border: 3,
                    p: 3}}
                    >
                    <Grid> 
                    {/* TODO: add date */}
                        <Typography variant="h2" component="h1" align="left">
                            Calendar
                        </Typography>
                        {/* TODO add user info */}
                    </Grid>
                    <Separator />
                    <Grid> 
                    <LocalizationProvider dateAdapter={AdapterDateFns}>
                    <StaticDatePicker
                        orientation="landscape"
                        openTo="day"
                    />
                    </LocalizationProvider>                    
                    </Grid>
                    <Grid> 
                        
                        {/* TODO: add precentage in connection to stats */}
                        <Typography variant="h5" component="h2" align="left">
                        You have a 4 day streak! 
                        Before you know it you’ll acheive a master level of completion on all habits!                    
                        </Typography>
                        <Typography variant="h5" component="h4" align="left" style={{ fontWeight: 600 }}>
                            Well done! 
                        </Typography>                  
                    </Grid>

            </Box>
        </Grid>
        </Grid> 


        </Container>
      </React.Fragment>
    );
}

export default Dailyhabitdash;