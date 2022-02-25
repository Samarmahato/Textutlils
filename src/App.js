// import React,{useState,useEffect} from "react";
import React from 'react';
import { useState } from "react";
import "./App.css";
// import About from "./component/About";
import Navbar from "./component/Navbar";
import TextForm from "./component/TextForm";
import Alert from "./component/Alert";

// import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

function App() {
  const [mode, setMode] = useState("light"); //Whether dark mode is enabled or not

  const [alert, setAlert] = useState(null);
  const showAlert = (message, type) => {
    setAlert({
      msg: message,
      type: type,
    });
    setTimeout(() => {
      setAlert(null);
    }, 1500);
  };

  const toggleMode = () => {
    if (mode === "light") {
      setMode("dark");
      document.body.style.backgroundColor = "#0a3576";
      showAlert("Dark mode has been enable ", "success");
      document.title = "Textutlies - Dark Mode";
      //  setInterval(() => {
      //   document.title='Textutlies -is amazing Mode';
      //  }, 2000);
      //  setInterval(() => {
      //   document.title='Textutlies -install now Mode';
      //  }, 1500);
    } else {
      setMode("light");
      document.body.style.backgroundColor = "white";
      showAlert("Light mode has been enable ", "success");
      document.title = "Textutlies - Light Mode";
    }
  };

  return (
    <>
      {/* <Router> */}
        <Navbar title="Textutils" mode={mode} toggleMode={toggleMode} />
        <Alert alert={alert} />
        <div className="container my-3">
          {/* <Switch> */}
            {/* <Route exact path="/about">
              
              <About />
            </Route> */}
            {/* <Route exact path="/"> */}
              <TextForm
                showAlert={showAlert}
                heading="Enter The Text to Analysis"
                mode={mode}
              />
            {/* </Route> */}
          {/* </Switch> */}
        </div>
      {/* </Router> */}
    </>
  );
}

export default App;
