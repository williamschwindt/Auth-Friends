import React from 'react';
import './App.css';
import { Login } from './components/Login';
import { BrowserRouter as Router, Route, Link } from 'react-router-dom';
import { FriendsList } from './components/FriendsList';
import { PrivateRoute } from './components/PrivateRoute';

function App() {
  return (
    <Router>
      <div className="App">
        <Link to="/login">Login</Link>

        <Route exact path ="/login" component={Login}/>
        <PrivateRoute exact path="/friendslist" component={FriendsList}/>
      </div>
    </Router>
  );
}

export default App;
