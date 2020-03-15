import React from 'react';
import './App.css';
import { Login } from './components/Login';
import { BrowserRouter as Router, Route, Link } from 'react-router-dom';
import { FriendsList } from './components/FriendsList';

function App() {
  return (
    <Router>
      <div className="App">
        <Link to="/login">Login</Link>

        <Route exact path ="/login" component={Login}/>
        <Route exact path="/friendslist" component={FriendsList}/>
      </div>
    </Router>
  );
}

export default App;
