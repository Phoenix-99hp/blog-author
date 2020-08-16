import React from 'react';
import { BrowserRouter as Router, Route } from "react-router-dom";
import WritePost from "./pages/WritePost";
import Home from "./pages/Home";
import Error from "./pages/Error";
import Login from "./pages/Login";

function App() {
  return (
    <Router basename="/blog-author">
      <div className="App">
        <Route exact path="/" render={props => (<Login {...props} />)} />
        <Route exact path="/home" render={props => (<Home {...props} />)} />
        <Route exact path="/write" render={props => (<WritePost {...props} />)} />
        <Route exact path="/error" render={props => (<Error {...props} />)} />
      </div>
    </Router>
  );
}

export default App;
