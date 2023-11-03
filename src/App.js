import logo from './logo.svg';

import { BrowserRouter, Routes, Route } from "react-router-dom";
// import { BrowserRouter as Router, Route, Switch } from "react-router-dom";

import Login from './components/login';
import Home from './components/Home';
import Signup from './components/signup';
import './App.css';
import Navbar from './components/Navbar';
import Notes from './components/Notes';
import NoteState from './context/notes/NoteState';
import { useState } from 'react';
import About from './components/About';
import Noteitem from './components/Noteitem';
import AddNote from './components/AddNote';


function App() {
  // const [credentials, setcredentials] = useState({ email: "", password: "" })

  // const onChange = (e) => {
  //   setcredentials({ ...credentials, [e.target.name]: e.target.value })
  // }
  return (
    <>
    {/* <Navbar/> */}
    {/* <h1 style={{textAlign:'center'}} >I will make login and signup page and I will learn how it works</h1> */}
    <NoteState>
    <BrowserRouter basename="/notes_code">
    <Navbar/>

    <Routes>

      <Route path="/" element={<Home />}/>

        <Route path="/Login" element={<Login />} />
        <Route path="/Signup" element={<Signup />} />
        <Route path="/Notes" element={<Notes />} />
        <Route path="/About" element={<About />} />
        <Route path="/Noteitem" element={<Noteitem />} />
        <Route path="/AddNote" element={<AddNote />} />



    </Routes>
  </BrowserRouter>
  </NoteState>
  </>
  );
}

// const root = ReactDOM.createRoot(document.getElementById('root'));
// root.render(<App />);
export default App;
