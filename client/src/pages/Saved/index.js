import React from "react";
import "./SavedPage.css";
import Nav from "../../components/Nav";
import SavedPage from "./SavedPage";
import "./styles.css";
import SavedPage from "./savedPage";
import UserContext from "../../userContext";

function SavedFav(props) {

  const myUser = React.useContext(UserContext);
  if(myUser.id == undefined){
    props.history.push('/login')
  }

  return (
    <div className="App">
      <Nav />
      <SavedPage />
    </div>
  );
}

export default SavedFav;
