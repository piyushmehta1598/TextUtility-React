import "./App.css";
import Navbar from "./component/Navbar";
import Textform from "./component/Textform";
import About from "./component/About";
import React, { useState } from "react";
import  Alert from "./component/Alert";
import {
  BrowserRouter as Router,
  Routes,
  Route
} from "react-router-dom";
function App() {
  const [mode, setmode] = useState("light");
  const [alert, setalert] = useState(null);
  const [btncolor, setbtncolor] = useState('primary');
  
  const showAlert=(msg , type)=>
  {
    setalert({
      type:type,
      message:msg
    })
     setTimeout(()=>{setalert(null)},1500)
  }

  const toggle=()=>
  {
      if (mode==="light")                          
      {
          setmode("dark");
          document.body.style.backgroundColor='black';
          showAlert("Dark Mode has been Enabled", "success")
      }
      else
      {
        setmode("light");
        document.body.style.backgroundColor='#f0f0f0';
        showAlert("Light Mode has been Enabled", "success")
      }
    
  }

  const color1=()=>
  {
    document.body.style.backgroundColor='#052962';
    setmode("dark");
    setbtncolor('primary')
    showAlert("Color Changed to Dark Blue", 'info')
  }
  const color2=()=>
  {
    document.body.style.backgroundColor='darkgreen';
    setmode("dark");
    setbtncolor('success')
    showAlert("Color Changed to Dark Green", 'success')
  }

  const color3=()=>
  {
    document.body.style.backgroundColor='darkred';
    setmode("dark");
    setbtncolor('danger')
    showAlert("Color Changed to Dark Red", 'danger')

  }

  const color4=()=>
  {
    document.body.style.backgroundColor='dodgerblue';
    setmode("dark");
    setbtncolor('info')
    showAlert("Color Changed to Deep SkyBlue", 'info')

  }

  const color5=()=>
  {
     
        document.body.style.backgroundColor='black';
        setmode("dark");
        setbtncolor('dark')
        showAlert("Color Changed to Dark Black", 'dark')
    // else{
    //   document.body.style.backgroundColor='white';
    //     setmode("light");
    // }

    }

    const color6=()=>
    {
      document.body.style.backgroundColor='white';
      setmode("light");
      setbtncolor('light')
      showAlert("Color Changed to white", 'dark')
  
    }

  return (
    <>
      <Router>
      <Navbar title="TextUtility" about="About" mode={mode} toggle={toggle} color1={color1} color2={color2} color3={color3} color4={color4} color5={color5} color6={color6} />
      <Alert alert={alert}  />
    <div className="container">
      <Routes>
        <Route exact path="/about" element={<About />} />
        <Route exact path="/" element={<Textform head="Text converter" mode={mode} showAlert={showAlert} btncolor={btncolor} />} />
      </Routes>

    </div>
      </Router>
    </>
  );
}

export default App;
