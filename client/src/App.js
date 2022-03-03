import React from "react";
import {BrowserRouter as Router, Redirect} from "react-router-dom";
import AppRouter from "./components/AppRouter";
import {SHOP_ROUTE} from "./utils/consts";
import NavBar from "./components/nav_bar/NavBar";

function App() {
    return (
        <Router>
            <NavBar/>
            <AppRouter/>
        </Router>
    );
}

export default App;
