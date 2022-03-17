// TODO: trouble-shoot calendar component
import * as React from 'react';
// form elements
import Button from '@mui/material/Button';
import CssBaseline from '@mui/material/CssBaseline';
import TextField from '@mui/material/TextField';
// format
import Grid from '@mui/material/Grid';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import Container from '@mui/material/Container';
import Autocomplete from '@mui/material/Autocomplete';
import Stack from '@mui/material/Stack';
// calendar
import AdapterDateFns from '@mui/lab/AdapterDateFns';
import LocalizationProvider from '@mui/lab/LocalizationProvider';
import StaticDateRangePicker from '@mui/lab/StaticDateRangePicker';
import { createTheme, ThemeProvider } from '@mui/material/styles';

const theme = createTheme();

// option set one
const options1 = ['Sleep', 'Gratitude', 'Exercise', 'Study','Drink Water', 'Eat Healthy', 'Meditation', 'Self Care', 'Read'];
// option set two
const options2 = ['Healthy Living ', 'Financial', 'Productivity', 'Mindset','Connection'];

const options3 = ['daytime', 'morning', 'afternoon', 'night'];


export default function Newhabit() {
    const handleSubmit = (event) => {
      event.preventDefault();
      const data = new FormData(event.currentTarget);
      console.log({
        email: data.get('email'),
        password: data.get('password'),
      });
    };

    const [value, setValue] = React.useState(options1[0]);
    const [inputValue, setInputValue] = React.useState('');

  

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
            <Typography component="h1" variant="h5">
              New Habit
            </Typography>
            <Box component="form" noValidate onSubmit={handleSubmit} sx={{ mt: 3, }}>
              <Grid>
              <Stack spacing={4} sx={{ width: 500 }}>
              <Autocomplete
                value={value}
                onChange={(event, newValue) => {
                setValue(newValue);
                }}
                inputValue={inputValue}
                onInputChange={(event, newInputValue) => {
                setInputValue(newInputValue);
                }}
                id="controllable-states-demo"
                options={options1}
                sx={{ width: 500 }}
                renderInput={(params) => <TextField {...params} label="Habit" />}
                />
                <Autocomplete
                value={value}
                onChange={(event, newValue) => {
                setValue(newValue);
                }}
                inputValue={inputValue}
                onInputChange={(event, newInputValue) => {
                setInputValue(newInputValue);
                }}
                id="controllable-states-demo"
                options={options2}
                sx={{ width: 500 }}
                renderInput={(params) => <TextField {...params} label="Type" />}
                />
                <Autocomplete
                value={value}
                onChange={(event, newValue) => {
                setValue(newValue);
                }}
                inputValue={inputValue}
                onInputChange={(event, newInputValue) => {
                setInputValue(newInputValue);
                }}
                id="controllable-states-demo"
                options={options3}
                sx={{ width: 500 }}
                renderInput={(params) => <TextField {...params} label="Time of Day" />}
                />
                </Stack>

                {/* <LocalizationProvider dateAdapter={AdapterDateFns}>
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
                </LocalizationProvider> */}
              </Grid>

              <Button
                type="submit"
                fullWidth
                variant="contained"
                sx={{ mt: 3, mb: 2 }}
              >
                Create
              </Button>
            </Box>
          </Box>
        </Container>
      </ThemeProvider>
    );
}
