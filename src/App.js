import React from "react";
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import Home from "./pages/Home/Home";
import About from "./pages/About/About";
import Contact from "./pages/Contact/Contact";

import "./App.css";
import BlogPost from "./component/BlogPost/BlogPost";

function App() {
    return (
        <Router>
            <ul>
                <li>
                    <Link to="/">Home</Link>
                </li>
                <li>
                    <Link to="/about">About</Link>
                </li>
                <li>
                    <Link to="/contact">Dashboard</Link>
                </li>
                <li>
                    <Link to="/blogpost">Blogpost</Link>
                </li>
            </ul>

            <hr />
            <switch>
                <Route exact path="/">
                    <Home />
                </Route>
                <Route path="/about">
                    <About />
                </Route>
                <Route path="/contact">
                    <Contact />
                </Route>
                <Route path="/blogpost">
                    <BlogPost />
                </Route>
            </switch>
        </Router>
    );
}

export default App;
