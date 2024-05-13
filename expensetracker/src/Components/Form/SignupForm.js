import React, { useState } from "react";
import { auth } from '../../Firebase';
import { createUserWithEmailAndPassword } from 'firebase/auth';

const SignupForm = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");

  
  const signupHandler = async (e) => {
    e.preventDefault();
    if (password !== confirmPassword) {
      alert("Passwords don't match");
      return;
    }
    try {
      await createUserWithEmailAndPassword(auth, email, password);
      alert('Account created successfully');
      
      
    } catch (err) {
      alert(err.message);
     
    }
  };

  return (
    <form
      onSubmit={signupHandler}
      className="d-flex flex-column w-25 mx-auto p-5"
    >
      <div className="mb-3">
        <label htmlFor="formGroupExampleInput" className="form-label">
          Email
        </label>
        <input
          type="email"
          className="form-control"
          id="formGroupExampleInput"
          onChange={(e) => setEmail(e.target.value)}
          required
        />
      </div>
      <div className="mb-3">
        <label htmlFor="formGroupExampleInput2" className="form-label">
          Passowrd
        </label>
        <input
          type="password"
          className="form-control"
          id="formGroupExampleInput2"
          onChange={(e) => setPassword(e.target.value)}
          required
        />
      </div>
      <div className="mb-3">
        <label htmlFor="formGroupExampleInput2" className="form-label">
          Confirm Passowrd
        </label>
        <input
          type="password"
          className="form-control"
          id="formGroupExampleInput3"
          onChange={(e) => setConfirmPassword(e.target.value)}
          required
        />
      </div>
      <button type="submit" className="btn btn-primary">
        Sign Up
      </button>
      <a className="nav-link mt-4" aria-current="page" href="/login">
        Have an account? LogIn
      </a>
    </form>
  );
};

export default SignupForm;