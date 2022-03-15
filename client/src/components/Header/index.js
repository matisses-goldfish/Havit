import React from 'react';
import { Link } from 'react-router-dom';
import { makeStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import Tabs from '@material-ui/core/Tabs';
import Tab from '@material-ui/core/Tab';
import Link from '@material-ui/core/Link';
import Auth from '../../utils/auth';

const useStyles = makeStyles({
  root: {
    flexGrow: 1,
  },
});

export default function CenteredTabs() {
  const classes = useStyles();
  const preventDefault = (event) => event.preventDefault();
  const [value, setValue] = useState(0);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  return (
    <Paper className={classes.root}>
      <Tabs
        value={value}
        onChange={handleChange}
        indicatorColor="primary"
        textColor="primary"
        centered
      >
        <Tab label="Home" />
       
        <Link href="#" onClick={preventDefault}>
          Home
        </Link>
       
        
       
        <Tab label="Login" />
        <Link href="#" onClick={preventDefault}>
          Login
        </Link>
        <Tab label="Habit" />
        <Link href="#" onClick={preventDefault}>
          Habit
        </Link>
      </Tabs>
    </Paper>
  );
}
  

  
