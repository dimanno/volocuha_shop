import React from "react";
import {BrowserRouter as Router, Redirect} from "react-router-dom";
import AppRouter from "./components/AppRouter";
import {SHOP_ROUTE} from "./utils/consts";

function App() {
    return (
        <Router>
            <AppRouter/>
        </Router>
    );
}

export default App;
