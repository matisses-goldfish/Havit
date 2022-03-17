// TODO: Import habit
// TODO: Import Chart
// TODO: both chart and habits have not been rendering

// Customize data to render users username
import * as React from 'react';
import Box from '@mui/material/Box';
import CssBaseline from '@mui/material/CssBaseline';
import Container from '@mui/material/Container';
import Grid from '@mui/material/Grid';
import Typography from '@mui/material/Typography';
import AddIcon from '@mui/icons-material/Add';
import Button from '@mui/material/Button';
import { styled } from '@mui/material/styles';

import Chart from '../components/Chart';
// import HabitList from '../components/HabitList';



const Separator = styled('div')(
    ({ theme }) => `
    height: ${theme.spacing(5)};
  `,
);

function Dailyhabitdash() {
    return (
        <React.Fragment>
        <CssBaseline />
        <Container  sx={{ bgcolor: '#FFFFFF', height: '100vh', p: 7}}>
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
                        Welcome Back...
                    </Typography>
                    {/* TODO add user info */}
                    <Typography variant="h4" component="h1" align="left">
                        {/* {user.userName} */}
                        honore 
                    </Typography>
                </Grid>
                <Separator />
                <Grid>
                    <Button variant="outlined" href="/newHabit" startIcon={<AddIcon />}>
                    Create Habit
                    </Button>
                    <Separator />
                </Grid>
                <Grid>
                    <Typography variant="h4" component="h1" align="left">
                        Daily Habits:
                    </Typography>

                    {/* render daily habits */}
                    {/* <HabitList/> */}
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
                            Stats, 
                        </Typography>
                        {/* TODO add user info */}
                    </Grid>
                    <Separator />
                    <Grid> 
                    {/* TODO add stats or calendar */}
                    <Chart/>
                    </Grid>
                    <Grid> 
                        <Typography variant="h3" component="h2" align="left">
                            Honore, 
                        </Typography>
                        {/* TODO: add precentage in connection to stats */}
                        <Typography variant="h5" component="h2" align="left">
                        You’ve  improved on your goas by 76%! before you know it you’ll acheive a master level of completion!                    
                        </Typography>
                        <Typography variant="h4" component="h2" align="left">
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