import React from 'react';
// import { useLocation, useNavigate } from 'react-router-dom';

const Footer = () => {
  // const location = useLocation();
  // const navigate = useNavigate();
  return (
    <footer className="footer">
    <h4>&copy; {new Date().getFullYear()} - Habit-Tracker</h4>
    </footer>
  );
};

export default Footer;
