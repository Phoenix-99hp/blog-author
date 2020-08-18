import React from 'react';
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import WritePost from "./pages/WritePost";
import Home from "./pages/Home";
import Error from "./pages/Error";
import Login from "./pages/Login";

function App() {
  return (
    <Router basename="/blog-author">
      <div className="App">
        <Switch>
          <Route exact path="/" component={Login} />
          <Route exact path="/home" component={Home} />
          <Route exact path="/write" component={WritePost} />
          <Route exact path="/error" component={Error} />
        </Switch>
      </div>
    </Router>
  );
}

export default App;
