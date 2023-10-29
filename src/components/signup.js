import React from 'react'
import { useState } from "react";
import { useNavigate } from "react-router-dom";

const Signup = () => {
      const [credentials, setcredentials] = useState({name: "", email: "", password: "", cpassword : "" })

const host = "http://localhost:5000"
// const host = "https://mern-notes-app-6ek8.onrender.com"


  const navigate = useNavigate();

  const handleSubmit = async(e) => {
    e.preventDefault();

    const {name, email, password} = credentials;
    const response = await fetch(`${host}/api/auth/register`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        //   "auth-token" : 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VyIjp7ImlkIjoiNjNlMGMyNTExNzE4ZDIxMzc0MmU5YTNlIn0sImlhdCI6MTY3NTc1MDMwMX0.8ruEOgJ3igi5piuldEWRHBl0iC2v6NiYBFCbsDCZldY'
        },
      body: JSON.stringify({ name : credentials.name, email: credentials.email, password: credentials.password })
      });
      const json = await response.json()
      console.log(json)

      if(json.success){
        // Save the auth Token and REDIRECT
        localStorage.setItem('authToken', json.authToken);
        navigate("/Notes");


      }

}


  const onChange = (e) => {
    setcredentials({ ...credentials, [e.target.name] : e.target.value })
  }

  return (
    <div>
      <div className="container my-5">

    <form onSubmit={handleSubmit}>

<div className="mb-3">
  <label htmlFor = "exampleInputEmail1" className="form-label">Name</label>
  <input type="text" className="form-control" id="name" name='name' onChange={onChange} aria-describedby="emailHelp"/>
</div>

<div className="mb-3">
  <label htmlFor = "exampleInputEmail1" className="form-label">Email address</label>
  <input type="email" className="form-control" id="exampleInputEmail1"  name='email' onChange={onChange} aria-describedby="emailHelp"/>
</div>

<div className="mb-3">
  <label htmlFor = "password" className="form-label">Password</label>
  <input type="password" className="form-control" id="password"  name='password' onChange={onChange} minLength={5} required/>
</div>

<div className="mb-3">
  <label htmlFor = "cpassword" className="form-label">Confirm Password</label>
  <input type="password" className="form-control" id="cpassword" name='cpassword'  onChange={onChange} minLength={5} required/>
</div>

<div className='text-center'>

<button type="submit" className="btn btn-primary">Submit</button>
</div>
</form>
</div>

  </div>
  )
}

export default Signup
