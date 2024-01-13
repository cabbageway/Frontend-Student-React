import React from 'react';
import logo from './logo.svg';
import './App.css';
import ButtonAppBar from "./components/ButtonAppBar";
import Student from "./components/Student";




function App() {
  return (
    <div className="App">
     <ButtonAppBar/>
        <Student/>
    </div>
  );
}

export default App;
