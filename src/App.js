import About from "./Components/About";
import Alert from "./Components/Alert";
import Navbar from "./Components/Navbar";
import TextForm from "./Components/TextForm";
import "./index.css";
import React, {useState} from "react";
// import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';



export default function App() {

  const [mode,setMode] = useState('light');
  const [alertType,setAlertType] = useState("null");

  const toggleMode = () => {
    if(mode === 'dark'){
      setMode('light');
      document.body.style.backgroundColor = 'white'
      showAlert('Dark mode is disabled', 'success');
    }else{
      setMode('dark');
      document.body.style.backgroundColor = '#042743'
      showAlert('Dark mode is enabled', 'success');
    }
  }

  const showAlert = (message,type) => {
    setAlertType(
      {
        msg: message,
        type: type
      }
    )
    setTimeout(() => {
      setAlertType(alertType);
    }, 2000);
  }

  return (
    <div className="App">
      {/* <Router> */}
      <Navbar title="TextUtils" aboutText="About TextUtils" mode={mode} toggleMode={toggleMode}/>
      <Alert alertType={alertType} />
      <TextForm heading="Enter the text for the analyze below" mode={mode}/>
      {/* <Routes>
        <Route exact path="/about" element={<About />} />
        <Route exact path="/" element={<TextForm heading="Enter text for the analyze below" mode={mode}/> } />
      </Routes> */}
    {/* </Router> */}
    </div>
  );
}
