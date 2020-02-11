import React from 'react';
import Login from './components/Login';
import Navigate from './components/Navigate';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import './App.css';

function App() {
  return (
    <div className="App">
      <Router>
        <Switch>
          <Route path="/" exact component={Login} />
          <Route path="/login" exact 
            render={props => <Navigate {...props}/>} />
        </Switch>
      </Router>
    </div>
  );
}

export default App;
