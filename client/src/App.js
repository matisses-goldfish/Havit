import React from 'react';
//import { ApolloClient, InMemoryCache, ApolloProvider } from '@apollo/client';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

import Login from './pages/Login';
import Signup from './pages/Signup';
import Home from './pages/Home';
import Dailyhabitdash from './pages/Dailyhabitdashboard';
import Newhabit from './pages/Newhabit';
import Progress from './pages/Progress';
import Calender from './pages/Calender';
import Profile from './pages/Profile';




//const client = new ApolloClient({
// uri: '/graphql',
// cache: new InMemoryCache(),
//});

function App() {
    return (
        //<ApolloProvider client={client}>
        <Router>
            <Routes>
                <Route
                    path="/" element={<Home />} />
                <Route
                    path="/login" element={<Login />} />
                <Route
                    path="/signup" element={<Signup />} />
                <Route
                    path="/dailyhabitdash" element={<Dailyhabitdash />} />
                <Route
                    path="/newhabit" element={<Newhabit />} />
                <Route
                    path="/progress" element={<Progress />} />
                <Route
                    path="/calender" element={<Calender />} />
                <Route
                    path="/profile" element={<Profile />} />
            </Routes>
        </Router>
        //</ApolloProvider>
    );
}

export default App;
