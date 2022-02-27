// import './App.css';


// import { useState } from 'react';

import { useState } from 'react';
import About from './components/About.js';
import Alert from './components/alert.js';
import Navbar from './components/Navbar';
import TextFormone from './components/TextFormone';
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Link
} from "react-router-dom";


function App() {
  const [mode, setMode] = useState('light');
  const [alert, setAlert] = useState(null);
  const showAlert = (message, type) => {
    setAlert({
      msg: message,
      type: type
    })
  }
  const toggleMode = () => {
    if (mode === 'ligth') {
      setMode('dark');
      document.body.style.backgroundColor = 'yellow';
      showAlert("Dark mode has been enabled", "success");
    }
    else {
      setMode('light');
      document.body.style.backgroundColor = 'white';
      showAlert("Light mode has been enabled", "success");


    }
  }
  return (
    <>
        <Navbar title="TextUtils" mode={mode} toggleMode={toggleMode} />

      {/* <Navbar title="TextUtils"  aboutText="About TextUtils" /> */}
      <Router>
        <Alert alert={alert} />

        <Routes>
          <Route path="/About"></Route>
            {/* <About /> */}
              
          <Route path="/">
            <TextFormone showAlert={showAlert} heading="Enter the text below" mode={mode} />
          </Route>
        </Routes>

        <div className="container my-3">
          {/* <TextFormone heading="Enter the text" /> */}
          {/* <TextFormone heading="Enter the text" mode={mode}/> */}

          {/* < About /> */}

        </div>
      </Router>
    </>
  );
}
export default App;



