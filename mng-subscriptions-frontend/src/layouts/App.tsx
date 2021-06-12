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

const ProtectedRoute = ({ children, ...rest }: any) => {
  const user = useSelector((state: any) => state.user);
  return !user.data?.id ? (
    <Route {...rest}>{children}</Route>
  ) : (
    <Redirect to="/login" />
  );
};
function App() {
  const user = useSelector((state: any) => state.user);

  const dispatch = useDispatch();
  React.useEffect(() => {
    dispatch(getCurrentUser());
  }, [dispatch]);

  React.useEffect(() => {
    // console.log(user.data.id);
  }, [user]);
  return (
    <Router>
      {!user.data?.id && <Sidebar />}
      <Switch>
        <Route path="/login" exact>
          <Login />
        </Route>
        <Route path="/register" exact>
          <Register />
        </Route>
        <div className="App">
          <div style={{ marginLeft: "20%" }}>
            <ProtectedRoute path="/dashboard" exact>
              <Dashboard />
            </ProtectedRoute>
            <ProtectedRoute path="/cards" exact>
              <CardsList />
            </ProtectedRoute>
          </div>
        </div>
        <Redirect to="/login" />
      </Switch>
    </Router>
  );
}

export default App;
