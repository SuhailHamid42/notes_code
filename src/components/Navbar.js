import React from 'react'
// import { BrowserRouter, Routes, Route } from "react-router-dom";
import { useNavigate } from "react-router-dom";


const Navbar = () => {

  // let history = useHistory();
  const navigate = useNavigate();


  const handleLogout = () => {
    localStorage.removeItem('authToken');
    // history.go('/login');
    navigate("/");

  }
  let hrefValue;
  let hrefcondition = localStorage.getItem('authToken');
  if(!hrefcondition){
    hrefValue = "/";
  }
  else
  {
    hrefValue = "/Notes";
  }

  // let location = useLocation();

  return (
    <div>
        <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
  <div className="container-fluid">

    <a className="navbar-brand" href={hrefValue}>Home</a>
    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon"></span>
    </button>
    <div className="collapse navbar-collapse" id="navbarSupportedContent">
      <ul className="navbar-nav me-auto mb-2 mb-lg-0">
        <li className="nav-item">
          <a className="nav-link active" aria-current="page" href="/About">About</a>
        </li>
      </ul>
</div>
    <ul>
        {!localStorage.getItem('authToken')?<form className = "d-flex">
        <a className = "btn btn-primary mx-1" href='/Login' role="button">Login</a>
        <a className = "btn btn-primary mx-1" href='/Signup' role="button">SignUp</a>

      </form>: <button className='btn btn-primary' onClick={handleLogout}>LogOut</button>}
      </ul>

      
      </div>


</nav>
    </div>
  )
}

export default Navbar
