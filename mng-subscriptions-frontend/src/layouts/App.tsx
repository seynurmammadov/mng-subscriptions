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
function App() {
  return (
    <div className="App">
      <Router>
        <Sidebar />
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
          <Redirect to="/home" />
        </Switch>
      </Router>
    </div>
  );
}

export default App;
