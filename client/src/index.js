import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter as Router } from "react-router-dom";
import { Provider } from "react-redux";
import App from "./App";
import store from "./redux/store";
import ScrollToTop from "./components/ScrollToTop";

ReactDOM.render(
    <Provider store={store}>
        <Router>
            <ScrollToTop>
                <App />
            </ScrollToTop>
        </Router>
    </Provider>,
    document.getElementById("root")
);
