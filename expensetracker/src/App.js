
import './App.css';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { auth } from "./Firebase";
import { useEffect, useState } from "react";
import { onAuthStateChanged } from "firebase/auth";
import UpdateUserDetails from './Components/UpdateProfile/UpdateUserDetails';
import Header from './Components/Header/Header';
import SignupForm from './Components/Form/SignupForm';
import LogInForm from './Components/Form/LoginForm';
import Welcome from './Components/Welcome/Welcome';

function App() {
  return (
    <div className="App">
      
    <BrowserRouter>
      <Header />
      <Routes>
        <Route path="/signup" element={<SignupForm />} />
        <Route path="/login" element={<LogInForm />} />
        <Route path="/welcome" element={<Welcome />} />
        <Route path="/update" element={<UpdateUserDetails />} />
      </Routes>
    </BrowserRouter>
    </div>
  );
}

export default App;

  