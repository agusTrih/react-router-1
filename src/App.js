import React from "react";
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import Home from "./pages/Home/Home";
import About from "./pages/About/About";

import "./App.css";
import BlogPost from "./component/BlogPost/BlogPost";
import FakeApi from "./component/FakeApi/FakeApi";

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
                    <Link to="/contact">Fake Api Function</Link>
                </li>
                <li>
                    <Link to="/blogpost">Fake Api Class</Link>
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
                    <FakeApi />
                </Route>
                <Route path="/blogpost">
                    <BlogPost />
                </Route>
            </switch>
        </Router>
    );
}

export default App;
