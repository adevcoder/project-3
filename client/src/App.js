import React from "react";
import { BrowserRouter as Router, Route, Switch, Redirect } from "react-router-dom";
import Landing from "./pages/Landing"
import Register from "./pages/Register";
import Login from "./pages/Login";
import Home from "./pages/Home";
import Saved from "./pages/Saved";
import Donate from "./pages/Donate";
import Footer from "./components/Footer"
import userContext from "./userContext";
import axios from "axios"

function App() {
  const [user, setUser] = React.useState(false);
  const [userDetails, setUserDetails] = React.useState({});

  React.useEffect(() =>  {
    axios.get("/api/login", {
      withCredentials: true
    })
    .then((res) => {
      console.log("app.js data: ", res.data.id);

      if (res.data.id) {
        setUser(true);
        //setUserDetails(res.data.id);
        setUserDetails({...userDetails , UserId:res.data.id})
        this.props.router.push('/home')
      }
      else {
        //window.location.href='/login';
      }
      //this.props.router.push('/home')
      //props.history.push('/home')
    }).catch(error => {
      console.log("error.response: ", error.response)
      //console.log(error.response.data)
      if (error && error.response && error.response.data === "Unauthorized") {
        console.log("Username or Password Incorrect!");
        //alert("Login Error: Username or Password incorrect!")
      }
    });
  }, [setUser]);

  return (
    <Router>
      <div>
        <userContext.Provider value={userDetails}>
        <Nav />
        <Switch>
          {user ? (
            <React.Fragment>
          <Route exact path="/home" component={Home} />
          <Route exact path="/saved" component={Saved} />
            </React.Fragment>
          ) : 
           null}
          <Route exact path="/" component={Landing} />
          <Route exact path="/register" component={Register} />
          <Route exact path="/login" component={Login} />
          <Route exact path="/home" component={Home} />
          <Route exact path="/saved" component={Saved} />
          <Route exact path="/donate" component={Donate} />
        </Switch>
        <Footer />
        </userContext.Provider>
      </div>
    </Router>

  )
}

export default App;