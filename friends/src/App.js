import React from 'react';
import './App.css';
import { Login } from './components/Login';
import { BrowserRouter as Router, Route, Link } from 'react-router-dom';

function App() {
  return (
    <Router>
      <div className="App">
        <Link to="/login">Login</Link>

        <Route exact path ="/login" component={Login}/>
      </div>
    </Router>
  );
}

export default App;
