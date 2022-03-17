// // TODO: habit models: time of day 
// // TODO: test if date picker works
// import React, { useState } from 'react';
// // import * as React from 'react';
// import Avatar from '@mui/material/Avatar';
// import Button from '@mui/material/Button';
// import CssBaseline from '@mui/material/CssBaseline';
// import TextField from '@mui/material/TextField';
// import Link from '@mui/material/Link';
// import FormControl from '@mui/material/FormControl';
// import LocalizationProvider from '@mui/material/LocalizationProvider';
// import StaticDatePicker from '@mui/material/StaticDatePicker';
// import Box from '@mui/material/Box';
// import LockOutlinedIcon from '@mui/icons-material/LockOutlined';
// import Typography from '@mui/material/Typography';
// import Container from '@mui/material/Container';
// import { createTheme, ThemeProvider } from '@mui/material/styles';

// import { Link } from 'react-router-dom';
// import { useMutation } from '@apollo/client';

// import { ADD_HABIT } from '../../utils/mutations';
// import { QUERY_HABITS } from '../../utils/queries';

// import Auth from '../../utils/auth';

// // material copyright source"
// function Copyright(props) {
//   return (
//     <Typography variant="body2" color="text.secondary" align="center" {...props}>
//       {'Copyright © '}
//       <Link color="inherit" href="https://mui.com/">
//         Your Website
//       </Link>{' '}
//       {new Date().getFullYear()}
//       {'.'}
//     </Typography>
//   );
// }

// const theme = createTheme();

// const HabitForm = () => {
//   const [habitName, setHabitName] = useState('');

//   const [characterCount, setCharacterCount] = useState(0);

//   const [addHabit, { error }] = useMutation(ADD_HABIT, {
//     update(cache, { data: { addHabit } }) {
//       try {
//         const { habits } = cache.readQuery({ query: QUERY_HABITS });

//         cache.writeQuery({
//           query: QUERY_HABITS,
//           data: { habits: [addHabit, ...habits] },
//         });
//       } catch (e) {
//         console.error(e);
//       }

//       // update users object's cache
//       const { user } = cache.readQuery({ query: QUERY_USER });
//       cache.writeQuery({
//         query: QUERY_USER,
//         data: { user: { ...user, habits: [...user.habits, addHabit] } },
//       });
//     },
//   });

//   const handleFormSubmit = async (event) => {
//     event.preventDefault();

//     try {
//       const { data } = await addHabit({
//         variables: {
//           habitName,
//           habitAuthor: Auth.getProfile().data.username,
//         },
//       });

//       setHabitName('');
//     } catch (err) {
//       console.error(err);
//     }
//   };

//   const handleChange = (event) => {
//     const { name, value } = event.target;

//     if (name === 'habitName' && value.length <= 280) {
//       setHabitName(value);
//       setCharacterCount(value.length);
//     }
//   };
//   return (
//     <div>
//       <ThemeProvider theme={theme}>
//       <Container component="main" maxWidth="xs">
//         <CssBaseline />
//         <Box
//           sx={{
//             marginTop: 8,
//             display: 'flex',
//             flexDirection: 'column',
//             alignItems: 'center',
//           }}
//         >
//           <Avatar sx={{ m: 1, bgcolor: 'secondary.main' }}>
//             <LockOutlinedIcon />
//           </Avatar>
//           <Typography component="h1" variant="h5">
//             Create New Habit,
//           </Typography>
//           <Box component="form" onSubmit={handleSubmit} noValidate sx={{ mt: 1 }}>
//             <TextField
//               margin="normal"
//               required
//               fullWidth
//               id="habitName"
//               label="Habit Title"
//               name="habitName"
//             />
//             {/* TODO: Change based on Models */}
//             {/* type- Model */}
//             <FormControl fullWidth>
//               <InputLabel id="demo-simple-select-label"> Habit Type </InputLabel>
//               <Select
//                 labelId="demo-simple-select-label"
//                 id="demo-simple-select"
//                 value={type}
//                 label="Type"
//                 onChange={handleChange}
//               >
//                 {/* TODO: double check these */}
//                 <MenuItem value={health}>Healthy Living</MenuItem>
//                 <MenuItem value={financial}>Financial</MenuItem>
//                 <MenuItem value={productivity}>Productivity</MenuItem>
//                 <MenuItem value={mindset}>Mindset</MenuItem>
//                 <MenuItem value={connection}>Connection</MenuItem>
//               </Select>
//             </FormControl>

//             {/* TODO: Change based on Models */}
//             {/* interval- model */}
//             <FormControl fullWidth>
//               <InputLabel id="demo-simple-select-label"> Time of Day</InputLabel>
//               <Select
//                 labelId="demo-simple-select-label"
//                 id="demo-simple-select"
//                 value={time}
//                 label="Time of Day"
//                 onChange={handleChange}
//               >
//                 <MenuItem value={day}>All Day</MenuItem>
//                 <MenuItem value={morning}>Morning</MenuItem>
//                 <MenuItem value={afternoon}>Noon</MenuItem>
//                 <MenuItem value={night}>Night</MenuItem>
//               </Select>
//             </FormControl>
//           {/* endDate- models */}
//             <LocalizationProvider dateAdapter={AdapterDateFns}>
//               <StaticDatePicker
//                 displayStaticWrapperAs="desktop"
//                 label="Time Frame"
//                 value={value}
//                 onChange={(newValue) => {
//                   setValue(newValue);
//                 }}
//                 renderDay={renderWeekPickerDay}
//                 renderInput={(params) => <TextField {...params} />}
//                 inputFormat="'Week of' MMM d"
//               />
//             </LocalizationProvider>

//             <Button
//               type="submit"
//               fullWidth
//               variant="contained"
//               sx={{ mt: 3, mb: 2 }}
//             >
//               Create Habit
//             </Button>
//           </Box>
//         </Box>
//         <Copyright sx={{ mt: 8, mb: 4 }} />
//       </Container>
//     </ThemeProvider>
//     </div>
//   );
// };

// export default HabitForm;

