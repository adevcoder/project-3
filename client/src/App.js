import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Landing from "./pages/Landing"
import Register from "./pages/Register";
import Login from "./pages/Login";
import Nav from "./components/Nav";
import Home from "./pages/Home";
import Saved from "./pages/Saved"

function App() {
  return (
    <Router>
      <div>
        <Nav />
        <Switch>
          <Route exact path="/" component={Landing} />
          <Route exact path="/register" component={Register} />
          <Route exact path="/login" component={Login} />
          <Route exact path="/home" component={Home} />
          <Route exact path="/saved" component={Saved} />
        </Switch>
      </div>
    </Router>

  )
}

export default App;