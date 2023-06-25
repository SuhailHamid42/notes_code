import React from 'react'
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import Notes from './Notes';

const Login = () => {
  //     const [credentials, setcredentials] = useState({ email: "", password: "" })

  const host = ""

  const navigate = useNavigate();

  // function handleSubmit (e) {
  //   e.preventDefault();
  //   if(credentials.email === "hanan@gmail.com"){
  //   console.log("Successfully submitted");
  //   navigate(`/`);

  // alert("Hello Bhai");
  //   }
  //   else{
  //     console.log("Login with correct credentials");
  //   }
  // // console.log(credentials.password);
  // }


  const [credentials, setcredentials] = useState({ email: "", password: "" })
  // let history = useHistory();

  const handleSubmit = async (e) => {
    e.preventDefault();

    const response = await fetch(`${host}/api/auth/login`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        // 'mode': 'no-cors',
        // "auth-token" : localStorage.getItem('token')

          // "auth-token" : 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VyIjp7ImlkIjoiNjNlMGMyNTExNzE4ZDIxMzc0MmU5YTNlIn0sImlhdCI6MTY3NTc1MDMwMX0.8ruEOgJ3igi5piuldEWRHBl0iC2v6NiYBFCbsDCZldY'
      },
      body: JSON.stringify({ email: credentials.email, password: credentials.password })
    });
    const json = await response.json()
    console.log(json);


    if (json.success) {
     // Save the auth Token and REDIRECT
      localStorage.setItem('authToken', json.authToken);
      // props.showAlert("Logged into your Account Successfully", "success");

      navigate("/Notes");
      // return <Navigate replace to="/login" />;

    }
    

  }

  const onChange = (e) => {
    setcredentials({ ...credentials, [e.target.name] : e.target.value })
  }

  return (
    <div>
      <form onSubmit={handleSubmit}>
      <div className="form-group">
        <label htmlFor="email">Email address</label>
        <input type="email" className="form-control" value={credentials.email} id="email" onChange={onChange} name='email' aria-describedby="emailHelp" placeholder="Enter email" />
        <small id="emailHelp" className="form-text text-muted">We'll never share your email with anyone else.</small>
      </div>
      <div className="form-group">
        <label htmlFor="password">Password</label>
        <input type="password" className="form-control" value={credentials.password} id="password" onChange={onChange} name='password' placeholder="Password" />
      </div>

  <button type="submit" className="btn btn-primary">Submit</button>
</form>
    </div>
  )
}

export default Login
