
import React,{useState} from 'react';
import { Link } from 'react-router-dom';
import { makeStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import Tabs from '@mui/material/Tabs';
import Tab from '@material-ui/core/Tab';
import Grid from '@mui/material/Grid';
import Typography from '@material-ui/core/Typography';
import Box from '@material-ui/core/Box';

import Auth from '../../utils/auth';
const NavTab = () => {
  const [value, setValue] = useState('Home')
  const handleChange = (event, newValue) => {
    setValue(newValue);
  }

 
  // export default function NavTabs() {
  //   const classes = useStyles();
  //   const preventDefault = (event) => event.preventDefault();
  //   const [value, setValue] = useState(0);

  //   const handleChange = (event, newValue) => {
  //     setValue(newValue);
  //   };

  const logout = (event) => {
    event.preventDefault();
    Auth.logout();
  };


  return (
    <Paper >
      <Tabs
        value={value}
        onChange={handleChange}
        indicatorColor="light"
        textColor="primary"
        centered
      >
        {Auth.loggedIn() ? (
          <>

          <button className="btn btn-lg btn-light m-2" onClick={logout}>
            Logout
          </button>
         
          <Link className="btn btn-lg btn-light m-2" to="/">
           <Tab label="Home" />
           </Link>
          
            <Link className="btn btn-lg btn-light m-2" to="/Dailyhabitdashboard">
            <Tab label="Dashboard" />
            </Link>
          
            <Link className="btn btn-lg btn-light m-2" to="/newhabit">
            <Tab label="New habit" />
            </Link>

            <Link className="btn btn-lg btn-light m-2" to="/calendar">
            <Tab label="Progress" />
            </Link>
             </>
        ) : (
          <>
            <Grid item xs={6} justify={"flex-start"}>
                <Typography><h3>HAvit</h3></Typography>
            </Grid>
            <Link className="btn btn-lg btn-light m-2" to="/">
            <Tab label="Home" />
            </Link>
            
            <Link className="btn btn-lg btn-light m-2" to="/login">
            <Tab label="Login" />
            </Link>
          
            <Link className="btn btn-lg btn-light m-2" to="/signup">
            <Tab label="Signup" />
            </Link>


          </>
        )}
      </Tabs>
    
    </Paper>
  );
}

export default NavTab;

