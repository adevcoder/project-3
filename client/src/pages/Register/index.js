import React from "react";
// import ReactDOM from "react-dom";

import "./styles.css";
import ValidatedRegisterForm from "./ValidatedRegisterForm";

function App() {
  return (
    <div className="App">
      <h1>Register</h1>
      <ValidatedRegisterForm />
    </div>
  );
}

// const rootElement = document.getElementById("root");
// ReactDOM.render(<App />, rootElement);

export default App;