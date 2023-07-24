import "./App.css";
import React, { useState } from 'react'
import Navigation from "./custom/Navigation.js";
import TextForm from "./custom/TextForm.js"
import Alert from "./custom/Alert.js";
// import About from './custom/About.js'
// import {
//   BrowserRouter,
//   Switch,
//   Route
// } from 'react-router-dom';

function App() {
  const [mode, setMode] = useState('light');

  const [alert, setAlert] = useState(null);

  const showAlert = (message, type) => {
    setAlert({
      msg: message,
      type: type
    })
    setTimeout(() => {
      setAlert(null)
    }, 2000);
  }

  const toggleMode = () => {
    if (mode === 'light') {
      setMode('dark');
      document.body.style.backgroundColor = '#042743';
      showAlert("Dark Mode has been enabled", "success");
      document.title = "TextUtils - Dark Mode";
    }
    else {
      setMode('light');
      document.body.style.backgroundColor = 'white';
      showAlert("Light Mode has been enabled", "success");
      document.title = "TextUtils - Light Mode";
    }
  }
  return (
    <>
      {/* <BrowserRouter> */}
        <Navigation title="Textutils" aboutText="About" mode={mode} toggleMode={toggleMode} />
        <Alert alert={alert} />
        {/* <Navigation /> */}
        <div className="container my-3">
          {/* <Switch> */}
            {/* <Route exact path="/about">
              <About />
            </Route> */}
            {/* <Route exact path="/Home-Page"> */}
              <TextForm heading="Enter the text to analyze below" showAlert={showAlert} mode={mode} />
            {/* </Route> */}
          {/* </Switch> */}
        </div>
      {/* </BrowserRouter> */}


    </>
  );
}

export default App;
