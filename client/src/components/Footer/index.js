import React from 'react';
// import { useLocation, useNavigate } from 'react-router-dom';
import { Container, Grid, Typography } from "@material-ui/core";
const Footer = () => {
  // const location = useLocation();
  // const navigate = useNavigate();
  //To do need to check on the page and need to add style on container, grid or typography
  return (
    <footer className="footer">
      <Container maxWidth="lg">
      <Grid container spacing={3} justify="center">
      <Typography>
      <h4>&copy; {new Date().getFullYear()} - Habit-Tracker</h4>
      </Typography>
     
        </Grid>
      </Container>
   
    </footer>
  );
};

export default Footer;
