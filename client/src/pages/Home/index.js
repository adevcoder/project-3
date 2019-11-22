import React,{ useState } from "react";
import "./Home.css";
import Nav from "../../components/Nav";
import ButtonCategory from "../../components/Buttons/ButtonCategory"
import { NonprofitList, NonprofitListItem } from "../../components/NonprofitList/index"
import UserContext from "../../userContext";
function Home(props) {
  const [nonprofits, setNonProfits] = useState([]);
  const myUser = React.useContext(UserContext);
  if(myUser.id == undefined){
    props.history.push('/login')
  }
  return (
    <div className="App">
      <Nav />
      <ButtonCategory setnonprofits={setNonProfits}/>
      <NonprofitList showAction={false} nonprofits={nonprofits}/>
      {/* <NonprofitListItem /> */}
    </div>
  );
}

export default Home;