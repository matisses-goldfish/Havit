import React from 'react';
import { Link } from 'react-router-dom';

import Auth from '../../utils/auth';

const logout = () => {
  if(Auth.loggedIn()){
    Auth.logout();
    return <Redirect to="/login"/>;
  }
  };
  // TODO: adjust header to incorporate page components
  const appBar =()=>{
  return (
    <Paper square>
    <Tabs
      value={value}
      indicatorColor="primary"
      textColor="primary"
      onChange={handleChange}
      aria-label="disabled tabs example"
    >
      <Tab label="Active" />
      <Tab label="Disabled" disabled />
      <Tab label="Active" />
    </Tabs>
  </Paper>
  );
  }
export default appBar;
