import React from 'react';
// import { Link } from 'react-router-dom';
import { makeStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import Tabs from '@material-ui/core/Tabs';
import Tab from '@material-ui/core/Tab';
import Link from '@material-ui/core/Link';
import Typography from '@material-ui/core/Typography';
import Box from '@material-ui/core/Box';
// import Login from '../../pages/Login';
// import Signup from '../../pages/Signup';
// import Home from '../../pages/Home';//need to check this
import Auth from '../../utils/auth';
const navTab = () => {
  const [value, setValue] = useState(0)
  const handleChange = (event, newValue) => {
    setValue(newValue);
  }

  function TabPanel(props) {
    const { children, value, index, ...other } = props;

    return (
      <div
        role="tabpanel"
        hidden={value !== index}
        id={`full-width-tabpanel-${index}`}
        aria-labelledby={`full-width-tab-${index}`}
        {...other}
      >
        {value === index && (
          <Box >
            <Typography>{children}</Typography>
          </Box>
        )}
      </div>
    );
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
        indicatorColor="primary"
        textColor="primary"
        centered
      >
        {Auth.loggedIn() ? (
          <button className="btn btn-lg btn-light m-2" onClick={logout}>
            Logout
          </button>
        ) : (
          <>
            <Tab label="Home" />
            <Link className="btn btn-lg btn-primary m-2" to="/home">
              Home
            </Link>
            <Tab label="Login" />
            <Link className="btn btn-lg btn-light m-2" to="/login">
              Login
            </Link>
            <Tab label="Signup" />
            <Link className="btn btn-lg btn-light m-2" to="/signup">
              Signup
            </Link>


          </>
        )}
      </Tabs>
      {/* <TabPanel value={value} index={0}>
        <Home/>
      </TabPanel>
      <TabPanel value={value} index={1}>
        <Login/>
      </TabPanel>
      <TabPanel value={value} index={2}>
        <Signup/>
      </TabPanel> */}
    </Paper>
  );
}

export default navTab;

