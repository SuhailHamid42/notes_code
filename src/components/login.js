import React from 'react'
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import Notes from './Notes';

const Login = () => {
  //     const [credentials, setcredentials] = useState({ email: "", password: "" })

  // const host = "http://localhost:5000"
  const host = "https://notesbackend-dy98.onrender.com"


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
            <div className="text-center my-4">
        <h1>NOTEBOOK</h1>
        <p>
          <b>Your notes on cloud ☁️</b>
        </p>
      </div>
      <div className="container my-9">
    <div className="mb-3 ">
      <form className='formStyles' onSubmit={handleSubmit}>
      <div className="form-group mb-4">
        <label htmlFor="email">Email address</label>
        <input type="email" className="form-control" value={credentials.email} id="email" onChange={onChange} name='email' aria-describedby="emailHelp" placeholder="Enter email" />
      </div>
      <div className="form-group mb-4">
        <label htmlFor="password">Password</label>
        <input type="password" className="form-control" value={credentials.password} id="password" onChange={onChange} name='password' placeholder="Password" />
      </div>
  
      <div className="text-center">
  <button type="submit" className="btn btn-primary">Submit</button>
  </div>
</form>
</div>
</div>

    </div>

  )
}

export default Login
