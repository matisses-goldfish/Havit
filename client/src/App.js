// import logo from './logo.svg';
// import './App.css';

import React from 'react';
import {
  ApolloClient,
  InMemoryCache,
  ApolloProvider,
  createHttpLink,
} from '@apollo/client';
import { setContext } from '@apollo/client/link/context';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

// TODO: import pages here
// Pseudocode:
// import Home from './pages/Home';
// import Login from './pages/Login';
// import Questions from './pages/Questions';
// import Dashboard from './pages/Dashboard';
// import NewGoal from './pages/NewGoal';
// import Calender from './pages/Calendar';
// import Profile from './pages/Profile';
// import Footer from './components/Footer';
// import Header from './components/Header';

const httpLink = createHttpLink({
  uri: '/graphql',
});

const authLink = setContext((_, { headers }) => {
  const token = localStorage.getItem('id_token');
  return {
    headers: {
      ...headers,
      authorization: token ? `Bearer ${token}` : '',
    },
  };
});

const client = new ApolloClient({
  link: authLink.concat(httpLink),
  cache: new InMemoryCache(),
});


function App() {
  return (
    <ApolloProvider client={client}>
      <Router>
        <div className="App">
          {/* <header className="App-header">
            <img src={logo} className="App-logo" alt="logo" />
            <p>
              Edit <code>src/App.js</code> and save to reload.
            </p>
            <a
              className="App-link"
              href="https://reactjs.org"
              target="_blank"
              rel="noopener noreferrer"
            >
              Learn React
            </a>
          </header> */}
          <div className="container">
            <Routes>
              <Route 
                path="/"
                // element={<Home />}
              />
              <Route 
                path="/login" 
                // element={<Login />}
              />
              <Route 
              // TODO: adjust based on data feedback from user
                path="/questions" 
                // element={<Questions />}
              />
              <Route 
                path="/dashboard:username" 
                // element={<Dashboard />}
              />
              <Route 
                path="/newGoal" 
                // element={<NewGoal />}
              />
              <Route 
                path="/calendar" 
                // element={<Calender />}
              />
              <Route 
                path="profiles/:username" 
                // element={< Profile/>}
              />
            </Routes>
          </div>
          <Footer />
        </div>
      </Router>
    </ApolloProvider>
  );
}

export default App;

