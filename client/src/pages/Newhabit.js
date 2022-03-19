// TODO: trouble-shoot calendar component
import * as React from 'react';
// form elements
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';
import Button from '@mui/material/Button';
import CssBaseline from '@mui/material/CssBaseline';
import TextField from '@mui/material/TextField';
// format
import Grid from '@mui/material/Grid';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import Container from '@mui/material/Container';
import Stack from '@mui/material/Stack';
// calendar
import AdapterDateFns from '@mui/lab/AdapterDateFns';
import LocalizationProvider from '@mui/lab/LocalizationProvider';
import StaticDateRangePicker from '@mui/lab/StaticDateRangePicker';
import { createTheme, ThemeProvider } from '@mui/material/styles';

import { useQuery, useMutation } from '@apollo/client';
import { QUERY_TYPES, QUERY_INTERVALS } from '../utils/queries';

const theme = createTheme();

// option set one
// const habitName = ['Sleep', 'Gratitude', 'Exercise', 'Study','Drink Water', 'Eat Healthy', 'Meditation', 'Self Care', 'Read'];
// option set two
// const habitType = ['Healthy Living ', 'Financial', 'Productivity', 'Mindset','Connection'];

const habitTime = ['daytime', 'morning', 'morning', 'morning'];


export default function Newhabit() {
  const { queryTypes, data: dataType  } = useQuery(QUERY_TYPES);

  let habitName = []; 
  
  if (dataType) {
    habitName = dataType.types.map(t => t.name);
  }

  const { queryIntervals, data: dataIntervals} = useQuery(QUERY_INTERVALS);

  let habitType = []; 
  if (dataIntervals) {
    habitType = dataIntervals.intervals.map(t => t.name);
  }

    const handleSubmit = (event) => {
      event.preventDefault();
      const data = new FormData(event.currentTarget);
      console.log({
        email: data.get('email'),
        password: data.get('password'),
      });
    };

    const [value, setValue] = React.useState([null, null]);


    // const handleInputChange = (event, newValue) => {
    //   const { id, value } = event.target;
    //   console.log('ppppp ', id, value, newValue);
    //   // setUserFormData({ ...userFormData, [name]: value });
    // };
  

    return (
        <ThemeProvider theme={theme}>
        <Container component="main" maxWidth="xs">
          <CssBaseline />
          <Box
            sx={{
              marginTop: 8,
              display: 'flex',
              flexDirection: 'column',
              alignItems: 'center',
            }}
          >
            <Typography component="h1" variant="h4">
              New Habit
            </Typography>
            <Box component="form" noValidate onSubmit={handleSubmit} sx={{ mt: 3, width: 1250}} textAlign='center'>
            <Grid container columns={16}>
              <Grid xs={8}>
              <Stack spacing={4} sx={{ width: 500 }}>
              <FormControl>
                <InputLabel htmlFor="grouped-select">Habit</InputLabel>
                <Select defaultValue="" id="grouped-select" label="Habit">
                  <MenuItem value="" disable>
                    <em>please select one</em>
                  </MenuItem>
                  <MenuItem value={1}>Sleep</MenuItem>
                  <MenuItem value={2}>Gratitude</MenuItem>
                  <MenuItem value={3}>Exercise</MenuItem>
                  <MenuItem value={4}>Study</MenuItem>
                  <MenuItem value={5}>Drink Water</MenuItem>
                  <MenuItem value={6}>Eat Healthy</MenuItem>
                  <MenuItem value={7}>Meditation</MenuItem>
                  <MenuItem value={8}>Self Care</MenuItem>
                  <MenuItem value={9}>Read</MenuItem>
                </Select>
              </FormControl>
              <FormControl>
                <InputLabel htmlFor="grouped-select">Type</InputLabel>
                <Select defaultValue="" id="grouped-select" label="Type">
                  <MenuItem value="" disable>
                    <em>please select one</em>
                  </MenuItem>
                  <MenuItem value={1}>Healthy Living</MenuItem>
                  <MenuItem value={2}>Financial</MenuItem>
                  <MenuItem value={3}>Productivity</MenuItem>
                  <MenuItem value={4}>Mindset</MenuItem>
                  <MenuItem value={5}>Connection</MenuItem>
                </Select>
              </FormControl>
              <FormControl>
                <InputLabel htmlFor="grouped-select">Time of Day</InputLabel>
                <Select defaultValue="" id="grouped-select" label="Time of Day">
                  <MenuItem value="" disable>
                    <em>please select one</em>
                  </MenuItem>
                  <MenuItem value={1}>daytime</MenuItem>
                  <MenuItem value={2}>morning</MenuItem>
                  <MenuItem value={3}>afternoon</MenuItem>
                  <MenuItem value={4}>night</MenuItem>
                </Select>
              </FormControl>
              </Stack>
              </Grid>
              <Grid xs={8}>
                <LocalizationProvider dateAdapter={AdapterDateFns}>
                  <StaticDateRangePicker
                      displayStaticWrapperAs="desktop"
                      value={value}
                      onChange={(newValue) => {
                      setValue(newValue);
                      }}
                      renderInput={(startProps, endProps) => (
                      <React.Fragment>
                          <TextField {...startProps} />
                          <Box sx={{ mx: 2 }}> to </Box>
                          <TextField {...endProps} />
                      </React.Fragment>
                      )}
                  />
                  </LocalizationProvider>
              </Grid>
              <Box textAlign='center' sx={{width: 12000 }}>
              <Button
                type="submit"
                href="/Dailyhabitdashboard"
                variant="contained"
                sx={{ mt: 3, mb: 2, width:400 }}
              >
                Create Habit
              </Button>
              </Box>
              </Grid>
            </Box>
          </Box>
        </Container>
      </ThemeProvider>
    );
}
