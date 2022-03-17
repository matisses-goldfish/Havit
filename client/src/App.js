import React from 'react';
import {
  ApolloClient,
  InMemoryCache,
  ApolloProvider,
  createHttpLink,
} from '@apollo/client';
import { setContext } from '@apollo/client/link/context';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import NavTab from './components/Header'
import Footer from './components/Footer'
import Login from './pages/Login';
import Signup from './pages/Signup';
import Home from './pages/Home';
import Dailyhabitdash from './pages/Dailyhabitdashboard';
import Newhabit from './pages/Newhabit';
import Progress from './pages/Progress';
import Calender from './pages/Calender';
import Profile from './pages/Profile';

// import Footer from './components/Footer/index' // failed to compile with SyntaxError
// add these two library import statements

const httpLink = createHttpLink({
  uri: '/graphql',
});

// Construct request middleware that will attach the JWT token to every request as an `authorization` header
const authLink = setContext((_, { headers }) => {
  // get the authentication token from local storage if it exists
  const token = localStorage.getItem('id_token');
  // return the headers to the context so httpLink can read them
  return {
    headers: {
      ...headers,
      authorization: token ? `Bearer ${token}` : '',
    },
  };
});

const client = new ApolloClient({
  // Set up our client to execute the `authLink` middleware prior to making the request to our GraphQL API
  link: authLink.concat(httpLink),
  cache: new InMemoryCache(),
});

function App() {
  return (
<ApolloProvider client={client}>
      <Router>
        <div className="App">
          <NavTab />
          <div className="container">
          {/* <Header/> */}
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

              // TODO: adjust based on data feedback from user
                path="/progress" 
                element={<Progress />}
              />

              {/* TODO: change to /Dailyhabitdashboard/:username */}
              <Route 
                path="/Dailyhabitdashboard" 
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
      </ApolloProvider>
  );
}

export default App;
