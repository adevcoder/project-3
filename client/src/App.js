import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Landing from "./pages/Landing"
import Register from "./pages/Register";
import Login from "./pages/Login";
import Home from "./pages/Home";
import Saved from "./pages/Saved";
import Donate from "./pages/Donate";
import Footer from "./components/Footer"

function App() {
  return (
    <Router>
      <div>
        <Switch>
          <Route exact path="/" component={Landing} />
          <Route exact path="/register" component={Register} />
          <Route exact path="/login" component={Login} />
          <Route exact path="/home" component={Home} />
          <Route exact path="/saved" component={Saved} />
          <Route exact path="/donate" component={Donate} />
        </Switch>
        <Footer />
      </div>
    </Router>

  )
}

export default App;