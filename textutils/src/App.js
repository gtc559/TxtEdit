import './App.css';
import Alert from './components/Alert';
// import About from './components/About';
import Navbar from './components/Navbar';
import TextForm from './components/TextForm';
import React, { useState } from 'react';

function App() {
  // const [mode, setMode] = useState('light');
  const [alert, setAlert] = useState(null);
  const showAlert = (message, type) => {
    setAlert({
      msg: message,
      type: type
    })
  }
  showAlert("hi", "helloo")
  return (

    <>
      <Navbar title="TextUtils" showAlert1={showAlert} />
      <div className="container my-3">
        <Alert alert={alert} />
        {/* <About /> */}
        <TextForm heading="Enter the  text to analyze" />
      </div>

    </>


  );
}

export default App;
