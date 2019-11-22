import React,{ useState } from "react";
import "./Home.css";
import Nav from "../../components/Nav";
import ButtonCategory from "../../components/Buttons/ButtonCategory"
import { NonprofitList, NonprofitListItem } from "../../components/NonprofitList/index"

function App() {
  const [nonprofits, setNonProfits] = useState([]);
  return (
    <div className="App">
      <Nav />
      <ButtonCategory setnonprofits={setNonProfits}/>
      <NonprofitList nonprofits={nonprofits}/>
      <NonprofitListItem />
    </div>
  );
}

export default App;