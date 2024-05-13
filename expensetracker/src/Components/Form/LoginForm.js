import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { auth } from '../../Firebase';
import { signInWithEmailAndPassword } from 'firebase/auth';

const LogInForm = () => {
  const navigate = useNavigate();

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  
  const loginHandler = async (e) => {
    e.preventDefault();

    try {
      await signInWithEmailAndPassword(auth, email, password);
    
      alert('Login Successful');
      navigate("/update")
    } catch (err) {
      alert(err.message);
     
    }
  };

  return (
    <>
      <form
        onSubmit={loginHandler}
        className="d-flex flex-column w-25 mx-auto p-5"
      >
        <h3 className="d-flex justify-content-center">Login</h3>
        <div className="mb-3">
          <label htmlFor="formGroupExampleInput" className="form-label">
            Email
          </label>
          <input
            type="email"
            className="form-control bg-dark text-white"
            id="formGroupExampleInput"
            onChange={(e) => setEmail(e.target.value)}
            value={email}
            required
          />
        </div>
        <div className="mb-3">
          <label htmlFor="formGroupExampleInput2" className="form-label">
            Passowrd
          </label>
          <input
            type="password"
            className="form-control bg-dark text-white"
            id="formGroupExampleInput2"
            onChange={(e) => setPassword(e.target.value)}
            value={password}
            required
          />
        </div>
        <button type="submit" className="btn btn-primary">
          Login
        </button>
        <a
          className="d-flex justify-content-center mt-2"
          aria-current="page"
          href="/signup"
        >
          Forgot Password
        </a>
      </form>
      <a
        className="d-flex justify-content-center nav-link"
        aria-current="page"
        href="/signup"
      >
        Don't have an account? Sign up
      </a>
    </>
  );
};

export default LogInForm;