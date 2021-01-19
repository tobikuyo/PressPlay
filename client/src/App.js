import React from "react";
import { Route, Switch } from "react-router-dom";
import PrivateRoute from "./components/PrivateRoute";
import Home from "./pages/Home";
import Login from "./pages/Login";
import Register from "./pages/Register";
import "./styles/main.scss";

const App = () => {
    return (
        <Switch>
            <Route path="/register" component={Register} />
            <Route path="/login" component={Login} />
            <PrivateRoute exact="/" component={Home} />
        </Switch>
    );
};

export default App;
