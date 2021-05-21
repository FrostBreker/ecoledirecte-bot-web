import React from "react";
import {BrowserRouter as Router, Route} from "react-router-dom";
import Home from './components/home'
import Login from './components/login'
import Navbar from './components/Navbar'

function App() {
    return (
        <Router>
            <Navbar exact/>
            <Route path="/" exact>
                <Home />
            </Route>
            <Route path="/login" exact>
                <Login />
            </Route>
        </Router>
    )
}

export default App;