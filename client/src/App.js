// TODO: add header component
import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';


import Login from './pages/Login';
import Signup from './pages/Signup';
import Home from './pages/Home';
import Dailyhabitdash from './pages/Dailyhabitdashboard';
import Newhabit from './pages/Newhabit';
import Progress from './pages/Progress';
import Calender from './pages/Calender';
import Profile from './pages/Profile';
import Footer from './components/Footer';




//const client = new ApolloClient({
// uri: '/graphql',
// cache: new InMemoryCache(),
//});

function App() {
  return (

      <Router>
        <div className="App">
          <div className="container">
            <Routes>
              <Route 
                path="/"
                element={<Home />}
              />
              <Route 
                path="/login" 
                element={<Login />}
              />
              <Route 
                path="/signup"
                element={<Signup />}
              />
              <Route 
                path="/dailyhabitdashboard/:username" 
                element={<Dailyhabitdash />}
              />
              <Route 
                path="/newhabit" 
                element={<Newhabit />}
              />
              <Route 
                path="/progress" 
                element={<Progress />}
              />
              <Route 
                path="/calendar" 
                element={<Calender />}
              />
              <Route 
                path="profiles/:username" 
                element={< Profile/>}
              />
            </Routes>
          </div>
          <Footer/>
        </div>
      </Router>
  );
}

export default App;

