import React from "react";
import { Route, Switch } from "react-router-dom";
import Login from "./pages/Login";
import Register from "./pages/Register";
import "./styles/main.scss";

const App = () => {
    return (
        <Switch>
            <Route path="/register" component={Register} />
            <Route path="/login" component={Login} />
        </Switch>
    );
};

export default App;
