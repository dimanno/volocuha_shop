import React from "react";
import {BrowserRouter as Router} from "react-router-dom";
import AppRouter from "./components/AppRouter";
import NavBar from "./components/Navbar/NavBar";

function App() {
    return (
        <Router>
            <NavBar/>
            <AppRouter/>
        </Router>
    );
}

export default App;
