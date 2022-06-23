//import logo from './logo.svg';
import './App.css';
import Navbar from './components/Navbar';
import TextForm from './components/TextForm';
// import About from './components/About';
import  React, {useState} from 'react'
// import {
//   BrowserRouter as Router,
//   Routes,
//   Route,
// } from "react-router-dom";

function App() {
  const [mode, setMode] = useState('light');
  
  const toggleMode = () => {
    if(mode === 'light'){
      setMode('dark');
      document.body.style.backgroundColor = 'rgb(13 35 71)';
      document.title='TextUtils - Dark Mode';
    }
    else{
      setMode('light');
      document.body.style.backgroundColor = 'white';
      document.title='TextUtils - Light Mode';
    }
  }

  return (
    <>
    {/* <Router> */}
      <Navbar title="TextUtils" mode={mode} toggleMode={toggleMode}/>
      <div className="container my-3">
        {/* <Routes> */}
          {/* <Route exact path="/about" element={<About/>}/> */}
          {/* <Route exact path="/textform" element={<TextForm heading="Enter the text to analyze" mode={mode}/>}/> */}
          <TextForm heading="Enter the text to analyze" mode={mode}/>
        {/* </Routes> */}
      </div>
    {/* </Router> */}
    </>
  );
}

export default App;

