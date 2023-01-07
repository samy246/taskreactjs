import React from "react";
import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { ToastContainer } from "react-toastify";
import Home from "./Pages/Home";
import Login from "./components/Login";
import Register from "./components/Register";
import View from "./Pages/View";
import Employee from './Pages/Emp'
const App = () => {
  return (
    <div className="App">
      <ToastContainer theme="colored"></ToastContainer>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Register />}></Route>
          <Route path="/login" element={<Login />}></Route>
          <Route path="/home" element={<Home />}></Route>
          <Route path="/view" element={<View />}></Route>
          <Route path="/viewemployee/:id" element={<Employee/>}></Route>
        </Routes>
      </BrowserRouter>
    </div>
  );
};

export default App;
