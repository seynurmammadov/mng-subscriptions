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
import { useDispatch, useSelector } from "react-redux";
import { getCurrentUser } from "../redux/actions/Auth";
import Cards from "../components/Cards";
import CardsList from "../components/Cards";
import { authService } from "../Api/Service/Auth";
import AddCards from "../components/Cards/AddCards";

const ProtectedRoute = ({ children, ...rest }: any) => {
  const user = JSON.parse(localStorage.getItem("user")!);
  return user?.id ? (
    <Route {...rest}>{children}</Route>
  ) : (
    <Redirect to="/login" />
  );
};

function App() {
  const dispatch = useDispatch();

  React.useEffect(() => {
    dispatch(getCurrentUser());
  }, [dispatch]);

  return (
    <Router>
      <Sidebar />
      <Switch>
        <div className="App">
          <div style={{ marginLeft: "20%" }}>
            <Route path="/login" exact>
              <Login />
            </Route>
            <Route path="/register" exact>
              <Register />
            </Route>
            <Route path="/" exact>
              <Dashboard />
            </Route>
            <Route path="/cards" exact>
              <CardsList />
            </Route>
            <Route path="/addnewcards" exact>
              <AddCards />
            </Route>
            <Redirect to="/login" />
          </div>
        </div>
      </Switch>
    </Router>
  );
}

export default App;
