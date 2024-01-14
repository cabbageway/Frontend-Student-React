import React from 'react';
import logo from './logo.svg';
import './App.css';
import ButtonAppBar from "./components/ButtonAppBar";
import Student from "./components/Student";
import Layout from "./components/Layout";
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import StudentAdd from "./components/StudentAdd";
import Page404 from "./components/Page404";
import StudentsMongo from "./components/StudentsMongo";
import StudentAddMongo from "./components/StudentAddMongo";




function App() {
  return (
    <div className="App">

        <BrowserRouter>
            <Routes>
                <Route path="/" element={<Layout />}>
                    <Route path="addStudents" index element={<StudentAdd/>} />
                    <Route path="showStudents" index element={<Student/>} />
                    <Route path="addStudentsMongo" index element={<StudentAddMongo/>} />
                    <Route path="showStudentsMongo" index element={<StudentsMongo/>} />
                    <Route path="*" index element={<Page404/>} />

                </Route>
            </Routes>
        </BrowserRouter>

    </div>
  );
}

export default App;
