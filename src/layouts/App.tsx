import React from "react";
import "./App.scss";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Redirect,
} from "react-router-dom";
import Login from "../components/Auth/Login";
import Register from "../components/Auth/Register";
import Home from "../components/Home";
import Sidebar from "../components/Sidebar";
import Dashboard from "../components/Dash";
function App() {
  return (
    <div className="App">
      <Router>
        <Sidebar />
        <div style={{ marginLeft: "20%" }}>
          <Switch>
            <Route path="/" exact>
              <Home />
            </Route>
            <Route path="/login">
              <Login />
            </Route>
            <Route path="/register">
              <Register />
            </Route>
            <Route path="/dashboard">
              <div className="mt-5">
                <Dashboard />
              </div>
            </Route>
            <Redirect to="/" />
          </Switch>
        </div>
      </Router>
    </div>
  );
}

export default App;
