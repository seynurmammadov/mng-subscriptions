import React from "react";
import "./App.scss";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import Login from "../components/Auth/Login";
import Dashboard from "../components/Dash/Dashboard/Dashboard";
import Details from "../components/Dash/Details/Details";
function App() {
  return (
    <div className="App">
      <Router>
        <Switch>
          <Route path="/login">
            <Login />
          </Route>

          <Route path ="/dashboard">
            <Dashboard />
          </Route>
          <Route path ="/details">
            <Details />
          </Route>

        </Switch>
      </Router>
    </div>
  );
}

export default App;
