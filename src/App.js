import {BrowserRouter as Router,Route, Switch} from "react-router-dom";
import Dashboard from './pages/Dashboard';
import NavBar from './components/NavBar';
import React from 'react';
import Sales from './pages/Sales';
import Store from './pages/Store';


function App() {
  return (
    <Router>
      <NavBar/>
      <Switch>
        <Route path = "/" exact component = { Store }/>
        <Route path = "/sales" component = { Sales }/>
        <Route path = "/dashboard" component = { Dashboard }/>
      </Switch>
    </Router>
  );
}

export default App;
